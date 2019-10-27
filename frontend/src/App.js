import React from 'react';
import './App.css';
import Article from "./components/Article"
import Miniarticle from "./components/Mini-article"
import Teammember from "./components/Team-member"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Article></Article>
      <Miniarticle></Miniarticle>
      <Teammember></Teammember>
      
      
    </div>
  );
}

export default App;
