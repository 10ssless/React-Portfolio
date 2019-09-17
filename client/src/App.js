import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sabotage from './pages/Sabotage/Sabotage';
import Moodi from './pages/Moodi/Moodi';
import Local from './pages/Local/Local';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <> 
      <Switch >
        <div className="wrapper">
            <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={About}/> 
            <Route exact path="/sabotage" component={Sabotage}/> 
            <Route exact path="/keep-it-local" component={Local} /> 
            <Route exact path="/moodi" component={Moodi}/> 
            <Route exact path="/contact" component={Contact}/> 
        </div>
      </Switch>
    </>
  );
}

export default App;
