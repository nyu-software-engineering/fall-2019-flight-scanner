import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Homepage extends Component{
    constructor(props){
      super(props);
    }
  
  
    render (){
      return (
         <div>
        <h1> Welcome to homepage</h1>
        <Link to = {'./profile'}>Profile</Link>
        <br/>
        <Link to = {'./history'}>Flight Search History</Link>
        </div> 
      );
   }
  }

export default Homepage;
