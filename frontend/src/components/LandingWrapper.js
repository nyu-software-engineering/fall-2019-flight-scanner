import React, { Component } from 'react';
import Landing from './Landing'; 

class LandingWrapper extends Component{
    constructor(props){
        super(props); 
        if(!Landing.instance){
            Landing.instance = this; 
        }
    }

    
    render(){
        var instance = (<Landing></Landing>); 
        Object.freeze(instance);
        return (instance); 
    }
    
}

export default LandingWrapper; 