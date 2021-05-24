import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes';
// import App from './Components/App';
// import NavBar from './Components/Nav';
// import Home from './Components/Home';
// import Quote from './Components/Quote';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root'),
);
