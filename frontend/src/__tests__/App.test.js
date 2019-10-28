import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer'
import SearchAppBar from '../components/Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("SearchAppBar Component", () => {
  it('Matches with the snapshot', () =>{
    const shot = renderer.create(<SearchAppBar/>).toJSON()
    expect(shot).toMatchSnapshot()
  })
})