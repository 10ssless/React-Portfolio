import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
            <Route exact path="/" render={() => (
              <Home/>
            )} /> 
        </div>
      </Router>
    </>
  );
}

export default App;
