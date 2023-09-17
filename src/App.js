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
      "question": "Which library framework is used to build Facebook?",
      "options": [
        { "id": 1, "text": "React", "isCorrect": true },
        { "id": 2, "text": "Node", "isCorrect": false },
        { "id": 3, "text": "Bulma", "isCorrect": false },
        { "id": 4, "text": "Vue", "isCorrect": false }
      ],
    },
    {
      "id": 2,
      "question": "What is the short form of Indian Space Research Organisation?",
      "options": [
        { "id": 1, "text": "INC", "isCorrect": false },
        { "id": 2, "text": "INSP", "isCorrect": false },
        { "id": 3, "text": "NASA", "isCorrect": false },
        { "id": 4, "text": "ISRO", "isCorrect": true }
      ],
    },
    {
      "id": 3,
      "question": "Who won the world cup 2022?",
      "options": [
        { "id": 1, "text": "IND", "isCorrect": false },
        { "id": 2, "text": "BRA", "isCorrect": false },
        { "id": 3, "text": "ARG", "isCorrect": true },
        { "id": 4, "text": "GER", "isCorrect": false }
      ],
    },
    {
      "id": 4,
      "question": "How many days consist in a leep year?",
      "options": [
        { "id": 1, "text": "367", "isCorrect": false },
        { "id": 2, "text": "369", "isCorrect": false },
        { "id": 3, "text": "366", "isCorrect": true },
        { "id": 4, "text": "365", "isCorrect": false }
      ],
    }
  ];

  const [presentQuestionData, setPresentQuestionData] = useState(0);
  const currentQuestion = quizData[presentQuestionData];

  const handleCardClick = (selectedOption) => {
    if (selectedOption.isCorrect) {
      const nextQuestion = presentQuestionData + 1;

      if (nextQuestion < quizData.length) {
        setPresentQuestionData(nextQuestion);
      } else {
        alert("All questions answered");
      }
    } else {
      alert("WRONG.");
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Container question={currentQuestion.question} />
      <Card option={currentQuestion.options} handleCardClick={handleCardClick} />
      <FootBar />
    </div>
  );
}

export default App;
