import React from 'react';
import TestRenderer from 'react-test-renderer';
import ProgressBar from '../components/Progress';

describe("Progressbar function", () => {
    it('Matches with the snapshot', () => {
        const shot = TestRenderer.create(<ProgressBar/>).toJSON()
        expect(shot).toMatchSnapshot()
    })
});