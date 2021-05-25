import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import App from './App';
import ButtonPanel from './ButtonPanel';

Enzyme.configure({ adapter: new Adapter() });

describe('ButtonPanel Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders correctly', () => {
    const app = create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Passes the clickHandler correctly to ButtonPanel', () => {
    const app = Enzyme.shallow(<App />);
    const instance = app.instance();

    expect(app.find(ButtonPanel).get(0).props.clickHandler).toEqual(instance.handleClick);
  });

  it('Updates the state correctly when clickHandler is invoked', () => {
    const app = Enzyme.shallow(<App />);
    const instance = app.instance();

    instance.handleClick('1');

    expect(app.state()).toEqual({ next: '1', operation: null, total: null });
  });

  it('Returns the correct value when using the `result` attribute getter', () => {
    const app = Enzyme.shallow(<App />);
    const instance = app.instance();

    instance.setState({ next: '0', operation: '+', total: '15' });
    expect(instance.result).toEqual('0+15');

    instance.setState({ next: null, operation: null, total: null });
    expect(instance.result).toEqual('');
  });
});
