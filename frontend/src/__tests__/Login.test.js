import React from 'react';
import ReactDOM from 'react-dom';
import Login, { checkEmailExists } from '../components/Login';

import { checkEmailExists, checkSignInProvider, checkSignedIn, availableSignInOptions, emailValid, passwordHasSpecialChars, passwordLongEnough } from '../components/Login'

it('renders login component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('checks provider', () => {
    expect(checkSignInProvider()).toBe("google")
});

it('checks whether user signed in', () => {
    expect(checkSignedIn()).toBeTruthy()
})

it('checks available sign in options', () => {
    expect(availableSignInOptions()).toEqual(["Google", "Guest"])
})

it('checks password is long enough', () => {
    expect(passwordLongEnough("abc")).not.toBeTruthy()
    expect(passwordLongEnough("abcdefghi")).toBeTruthy()
})

it('checks password has special chards', () => {
    expect(passwordHasSpecialChars("abcdef")).not.toBeTruthy()
    expect(passwordHasSpecialChars("adef&*12!")).toBeTruthy()
})

it('validates an email address', () => {
    expect(emailValid("myname@myplace.com")).toBeTruthy()
    expect(emailValid("cannotbeanemail.haha")).not.toBeTruthy()
})

it('check if email exists', () => {
    expect(checkEmailExists("test@test.com", ["nothing@here.com", "something@there.com"])).not.toBeTruthy()
})