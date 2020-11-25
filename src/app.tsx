import React from 'react';
import Routes from "./routes/index";
import {Router} from "react-router-dom";

import './styles/globalstyles.css';
import history from "./config/history";


const App: React.FC = () => {
  return (   
    <Router history={history}>

    <Routes />

    </Router>
  );
}

export default App;

