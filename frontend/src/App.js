import React from 'react';
import './App.css';
import Article from "./components/Article"
import Miniarticle from "./components/Mini-article"
import Teammember from "./components/Team-member"

function App() {
  return (
    <div className="App">
      Welcome to LightShare! 
      <Article></Article>
      <Miniarticle></Miniarticle>
      <Teammember></Teammember>
      
    </div>
  );
}

export default App;
