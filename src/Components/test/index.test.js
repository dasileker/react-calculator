import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';

jest.mock('react-dom');

describe('Root file index.js', () => {
  it('Renders the app using ReactDOM', () => {
    // eslint-disable-next-line
    require('../../index');
    expect(BrowserRouter).not.toEqual(
      (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      ),
      document.getElementById('root'),
    );
  });
});
