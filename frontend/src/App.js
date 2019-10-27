import React from 'react';
import './App.css';
import NavbarUI from "./components/Navbar_materialize"
import Search from "./components/Search"

function App() {
  return (
    <div className="App">

      <Search></Search>
      <NavbarUI></NavbarUI>
    
    </div>
  );
}

export default App;
