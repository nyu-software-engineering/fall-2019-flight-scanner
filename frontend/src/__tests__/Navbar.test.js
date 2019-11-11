import React from 'react';
import TestRenderer from 'react-test-renderer';
import NavbarUI from "../components/Navbar_materialize";

// Snapshot for the navbar(Materlize version)
// Same comments are as the previous one
describe("Navbar(M) Component", () => {
    it('Matches with the snapshot', () => {
        const shot = TestRenderer.create(<NavbarUI/>).toJSON()
        expect(shot).toMatchSnapshot()
    })
});