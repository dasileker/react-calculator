import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';
import ButtonPanel from './ButtonPanel';

Enzyme.configure({ adapter: new Adapter() });

describe('ButtonPanel Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonPanel clickHandler={() => null} />, div);
  });

  it('renders correctly', () => {
    const tree = create(<ButtonPanel clickHandler={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Passes the clickHandler correctly to all rendered buttons', () => {
    const clickHandler = () => null;

    const panel = Enzyme.shallow(<ButtonPanel clickHandler={clickHandler} />);

    panel.find(Button).forEach(button => {
      expect(button.get(0).props.clickHandler).toEqual(clickHandler);
    });
  });
});
