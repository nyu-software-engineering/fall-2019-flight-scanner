import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Login';

import { checkSignInProvider, checkSignedIn, availableSignInOptions } from '../components/Login'

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
// it('tests sign in', () => {
//     expect(googleSignIn()).toBe("Successful")
// })
