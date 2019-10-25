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

Teammember.defaultProps = {
  name: "Anonumous User", 
  role: "Classified Role", 
  bio: "A very private person. ", 
  imgURL: "ASSETS/default_profile.png"
  //imgURL: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"

}


export default Teammember;
