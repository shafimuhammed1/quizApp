import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Container from "./Components/Container/Container";
import './App.css'
import Card from "./Components/Cards/Card";
import FootBar from "./Components/FootBar/FootBar";


function App() {
  const quizData = [
    {
      "id": 1,
      "question": "Who is the Prime Minister of India?",
      "options": [
        { "id": 1, "text": "Narendra Modi", "isCorrect": true },
        { "id": 2, "text": "Manmohan Singh", "isCorrect": false },
        { "id": 3, "text": "Rahul Gandhi", "isCorrect": false },
        { "id": 4, "text": "Arvind Kejriwal", "isCorrect": false }
      ],
    },
    {
      "id": 2,
      "question": "Who is the Chief Minister of Kerala?",
      "options": [
        { "id": 1, "text": "Pinarayi Vijayan", "isCorrect": true },
        { "id": 2, "text": "Oommen Chandy", "isCorrect": false },
        { "id": 3, "text": "Ramesh Chennithala", "isCorrect": false },
        { "id": 4, "text": "Achuthanandan", "isCorrect": false }
      ],
    },
    {
      "id": 3,
      "question": "Who is the best director  of Kerala?",
      "options": [
        { "id": 1, "text": "Amal neerad", "isCorrect": true },
        { "id": 2, "text": "Anwar rasheed", "isCorrect": false },
        { "id": 3, "text": "Basil joseph", "isCorrect": false },
        { "id": 4, "text": "Ljp", "isCorrect": false }
      ],
    }
  ];

  const [presentQuestionData,setPresentQuestionData]=useState(0);
  const currentQuestion = quizData[presentQuestionData];

const handleCardClick=()=>{
  const nextQuestion= presentQuestionData+1;

  if(nextQuestion<quizData.length){
    setPresentQuestionData(nextQuestion);
   
  }else{
    alert("all answerd");
  }
};



  
  return (
   <div className="App">
      <NavBar />
      <Container question={currentQuestion.question} />
      <div className="Card-container">
        {currentQuestion.options.map((option) => ( 
          <Card key={option.id} option={option} handleCardClick={handleCardClick} />
        ))}
      </div>
      <FootBar />
    </div>
  )
      }

export default App;
