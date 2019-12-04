import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';


class Login extends Component {
    // constructor(props) {
    //     super(props)
    // }

    responseGoogle(res) {
        console.log(res.profileObj.email)
    }

    render() {
        return (
            // <div>
            //     <h2>Login</h2>
            //     <input type="text" name="Email" />
            //     <input type="password" name="Password" />
            //     <button onClick={validateItems()}>Login</button>
            // </div>
            <div>
                <GoogleLogin
                    clientId="841597979703-ujo0ol992t85ug1ngfu5p6c5j017l00l.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}

                />
            </div>
        );
    }
}

const emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
const alphanumericOnly = new RegExp("^[a-zA-Z0-9]*$")

function validateItems() {

}

function passwordLongEnough(password) {
    return password.length >= 8
}

function passwordHasSpecialChars(password) {
    return !alphanumericOnly.test(password)
}

function emailValid(email) {
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

function checkEmailExists(email, listOfEmails) {
    return listOfEmails.includes(email);
}

function conversion(password) {
    return '*'.repeat(password.length)
}

function passwordEntered(password) {
    return !(password.length === 0)
}

export default Login

export { passwordEntered, conversion, checkEmailExists, checkSignedIn, checkSignInProvider, availableSignInOptions, emailValid, emailRegex, passwordHasSpecialChars, passwordLongEnough }
