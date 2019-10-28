import React from 'react';
import TestRenderer from 'react-test-renderer';
import NavbarUI from "../components/Navbar_materialize";
import Navbar from "../components/Navbar_bootstrap";

// Snapshot for the navbar(Materlize version)
// Same comments are as the previous one
describe("Navbar(M) Component", () => {
    it('Matches with the snapshot', () => {
        const shot = TestRenderer.create(<NavbarUI/>).toJSON()
        expect(shot).toMatchSnapshot()
    })
});

// Snapshot of the Bootstrap Navbar 
describe("Navbar(B) Component", () => {
    it('Matches with the snapshot', () => {
        const shot = TestRenderer.create(<Navbar/>).toJSON()
        expect(shot).toMatchSnapshot()
    })
});