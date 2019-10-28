import React, {Component} from 'react';


class Login extends Component{
  
    render (){
      return (
      <div>
        <h2>Login</h2>
        <button onClick={googleSignIn()}>Login with Google</button>
      </div>
      );
    }    
}

function googleSignIn(){
}

function checkSignedIn(){
    return true;
}

function checkSignInProvider(){
    return "google";
}

function availableSignInOptions(){
    return ["Google", "Guest"]
}



export default Login

export {googleSignIn, checkSignedIn, checkSignInProvider, availableSignInOptions}
