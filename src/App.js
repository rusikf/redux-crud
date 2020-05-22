import React from 'react';
import Navbar from './common/navbar';
import Routes from './routes';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes />
      </Router>
    </div>
  );
}


export default App;
