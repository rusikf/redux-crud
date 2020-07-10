import React from 'react';
import Navbar from './common/navbar';
import Routes from './routes';
import history from './utils/history'
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router history={history}>
        <Navbar></Navbar>
        <Routes />
      </Router>
    </div>
  );
}


export default App;
