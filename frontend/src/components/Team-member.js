import React, {Component} from 'react';


class Teammember extends Component{
    // constructor(props){
    //   super(props);
    // }
  
  
    render (){
      return (
      <div>
        <p>Team member component will show up here</p>
        <img alt="Profile" src={this.props.imgURL} width = "200" height = "200"/>
        <h3>Name: {this.props.name}</h3>
        <h3>Role: {this.props.role}</h3>
        <p>Bio: {this.props.bio}</p>
        
      </div>
      );
    }

    
}

function getFirstName(name){
  const firstName = name.split(" "); 
  if(firstName.length <= 1){
    return "Invalid Name"; 
  }
  return firstName[0]; 
}

function validateRole(role){
  if(role !== "Admin" && role !== "Editor"){
    return "Invalid Role"; 
  }
  return role; 
}

function trimBio(bio){
  if(bio.length > 100){
    bio = bio.slice(0,100); 
  }
  return bio.length; 
}


function checkAuthority(role, action){
  if(role === "Admin"){
    return true; 
  }
  else{
    if (action === "Add Editor" || action === "Delete Editor"){
      return false; 
    }
    else{
      return true; 
    }
  }
}

function randomNumber(){
  return Math.floor((Math.random()+1)*1000).toString(); 
}

function generateUserID(name){
  if(name.length < 2){
    return "******"
  }
  var letters = name.slice(0, 2); 
  var num = randomNumber(); 
  return letters.concat(num); 
}

function filterBadWords(bio){
  bio = bio.replace("fuck", "****");
  return bio;  
}

function generateInfoArray(name, role){
  var info = name.split(" "); 
  if(role === "Admin" || role === "Editor"){
    info.push(role); 
  }
  else{
    info.push("Invalid")
  }
  return info;  
}

function makeRolesBinary(role){
  if(role === "Admin"){
    return 1; 
  }
  else if(role === "Editor"){
    return 0; 
  }
  else{
    return NaN; 
  }
}


Teammember.defaultProps = {
  name: "Anonumous User", 
  role: "Classified Role", 
  bio: "A very private person. ", 
  imgURL: "ASSETS/default_profile.png"
  //imgURL: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"

  
}






export {getFirstName, validateRole, trimBio, checkAuthority, generateUserID, filterBadWords, generateInfoArray, randomNumber, makeRolesBinary}; 

export default Teammember;
