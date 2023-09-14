import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Container from "./Components/Container/Container";
import './App.css'
import Card from "./Components/Cards/Card";
import FootBar from "./Components/FootBar/FootBar";


function App() {


  
  return (
    <div className="App">
     <NavBar/>
     <Container/>
     <Card/>
     <FootBar/>
    </div>
  );
}

export default App;
