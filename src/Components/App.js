import React from 'react';

import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  get result() {
    const { next, operation, total } = this.state;

    return `${next || ''}${operation || ''}${total || ''}`;
  }

  handleClick(name) {
    this.setState(state => calculate(state, name));
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
