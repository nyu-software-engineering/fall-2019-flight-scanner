import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    container: {
        width: "100vw",
        height: "100vh",
        background: "#2E3B55", 
        display: "flex"
    }, 
    subcontainer: {
        margin: "auto",
    }, 
    typo: {
        color: "white", 
        marginTop: "50px", 
        marginBottom: "25px"
    }
})

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            auth: false
        }
    }

    responseGoogle = (res) => {
        // send a request to get JWT

        if (sessionStorage.getItem("authToken") === null) {
            axios.post('http://localhost:5000/author/validate', { email: res.profileObj.email, token: res.tokenObj.id_token })
                .then(response => {
                    console.log(response)
                    sessionStorage.setItem("authToken", response.data.authToken)
                    sessionStorage.setItem("user", JSON.stringify(response.data.author))
                    this.setState({
                        auth: true,
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render() {
        const { classes } = this.props

        if (this.state.auth !== true && sessionStorage.getItem("authToken")===null) {
            return (
                <div className={classes.container}>
                    <div className={classes.subcontainer}>
                        <img src='translogo.png' />
                        <Typography variant="h3" className={classes.typo}>Welcome to Lightshare's Admin Interface</Typography>
                        <GoogleLogin
                            clientId="841597979703-ujo0ol992t85ug1ngfu5p6c5j017l00l.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </div>
                </div>
            );
        }
        else {
            return (<Redirect to="/my-articles" />)
        }
    }
}

const emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
const alphanumericOnly = new RegExp("^[a-zA-Z0-9]*$")

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

export default withStyles(styles)(Login)

export { passwordEntered, conversion, checkEmailExists, checkSignedIn, checkSignInProvider, availableSignInOptions, emailValid, emailRegex, passwordHasSpecialChars, passwordLongEnough }
