import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Homepage from './components/homepage';
import Profile from './components/profile';
import History from './components/history';


class App extends Component{
  constructor(props){
    super(props);
    // dummy variables for now
    this.state = {flgihts: [['Berlin', 'New York']]}
  }


  render (){
    return (
      <Router>
      <div className="App">
        <Route exact path = '/' component = {Homepage}/>
        <Route exact path = '/profile' component = {Profile} /> 
        <Route exact path = '/history' component = {History} />
      </div>
      </Router>
    );
 }
}


export default App;
