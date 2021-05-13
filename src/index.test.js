import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

jest.mock('react-dom');

describe('Root file index.js', () => {
  it('Renders the app using ReactDOM', () => {
    // eslint-disable-next-line
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      (
        <React.StrictMode>
          <App />
        </React.StrictMode>
      ),
      document.getElementById('root'),
    );
  });
});
