import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <input type="text" name="Email" />
                <input type="password" name="Password" />
                <button onClick={validateItems()}>Login</button>
            </div>
        );
    }
}

const emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
const alphanumericOnly = new RegExp("^[a-zA-Z0-9]*$")

function validateItems(){

}

function passwordLongEnough(password) {
    return password.length >= 8
}

function passwordHasSpecialChars(password){
    return !alphanumericOnly.test(password)
}

function emailValid(email){
    return emailRegex.test(email)
}

function checkSignedIn() {
    return true;
}

function checkSignInProvider() {
    return "google";
}

function availableSignInOptions() {
    return ["Google", "Guest"]
}

function checkEmailExists(email, listOfEmails){
    return listOfEmails.includes(email);
}

// function (){

// }

export default Login

export { checkEmailExists, checkSignedIn, checkSignInProvider, availableSignInOptions, emailValid, emailRegex, passwordHasSpecialChars, passwordLongEnough }
