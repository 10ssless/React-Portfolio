import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Focus/About";
import Sabotage from './pages/Focus/Sabotage';
import Moodi from './pages/Focus/Moodi';
import Local from './pages/Focus/Local';
import Contact from './pages/Focus/Contact';
// import Focus from './pages/Focus/Focus';
import './App.css';
import Pages from './pages.json';

class App extends React.Component {
  
  state = {
    pages:[]
  }

  componentDidMount(){
    this.setState({
      pages:Pages
    })
  }
  
  render(){
    return (
    <> 
      <Switch >
        <div className="wrapper">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/sabotage" component={Sabotage}/>
            <Route exact path="/keep-it-local" component={Local}/>
            <Route exact path="/moodi" component={Moodi}/>
            <Route exact path="/contact" component={Contact}/>
            {/* {this.state.pages.map(page=>{
              return(
                <Route exact path={"/"+page.title} render={()=>{
                  return(
                    <Focus link={page.link} made={page.made} text={page.text} img={page.img} />
                  )
                }}/> 
              )
            })} */}
        </div>
      </Switch>
    </>
  )}
}

export default App;
