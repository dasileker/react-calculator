import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Quote from '../Quote';
import Home from '../Home';
import App from '../App';

describe('Home  Componenet', () => {
  it('render without craching', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Quote />, div);
  });

  it('render without craching', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });

  it('renders correctly', () => {
    const quote = create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const home = create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  // to not get confused I add this comment this is the calculator it's inside the app
  it('renders correctly', () => {
    const calculator = create(<App />).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});
