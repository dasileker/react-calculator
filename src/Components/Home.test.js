import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './Home';

describe('Home  Componenet', () => {
  it('render without craching', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Quote />, div);
  });
})