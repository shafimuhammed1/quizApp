import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Container from "./Components/Container/Container";
import './App.css'
import Card from "./Components/Cards/Card";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Container/>
     <Card/>
    </div>
  );
}

export default App;
