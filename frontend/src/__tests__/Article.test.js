import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../components/Article';
import { markdown2html } from '../components/Article';

it('renders article component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Article />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('converts markdown to html', () => {

    const dummyMarkdown = `# Hello
This is some markdown test

## This markdown test should render properly
These are some bullet points
- Hello!
- Welcome!
`
expect(markdown2html(dummyMarkdown)).toMatchSnapshot()

});