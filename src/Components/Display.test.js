import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Display from './Display';

Enzyme.configure({ adapter: new Adapter() });

describe('Display Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Display />, div);
  });

  test('Sets the content to the provided `result` prop', () => {
    const container = Enzyme.shallow(<Display result="wtf" />);

    expect(container.text()).toEqual('wtf');
  });
});
