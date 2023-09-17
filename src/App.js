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
      "question": "Which library is used to build Facebook?",
      "options": [
        { "id": 1, "text": "React.js", "isCorrect": true },
        { "id": 2, "text": "Node.js", "isCorrect": false },
        { "id": 3, "text": "Bulma", "isCorrect": false },
        { "id": 4, "text": "Vue.js", "isCorrect": false }
      ],
    },
    {
      "id": 2,
      "question": "Which part of the body controls your thoughts?",
      "options": [
        { "id": 1, "text": "Lungs", "isCorrect": false },
        { "id": 2, "text": "Heart", "isCorrect": false },
        { "id": 3, "text": "Eye", "isCorrect": false },
        { "id": 4, "text": "Brain", "isCorrect": true }
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
      "question": "How many days consist in a leap year?",
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
      <FootBar/>
    </div>
  );
}

export default App;
