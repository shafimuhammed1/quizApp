import React,{useState} from 'react'
import './Container.css'
import Card from '../Cards/Card';






function Container() {
  const [questions, setQuestions] = useState([
    {
      "id": 1,
      "question": "Who is the prime minister of India?",
      "options": [
        { "id": 1, "text": "Narendra Modi", "isCorrect": true },
        { "id": 2, "text": "Manmohan Singh", "isCorrect": false },
        { "id": 3, "text": "Rahul Gandhi", "isCorrect": false },
        { "id": 4, "text": "Arvind Kejriwal", "isCorrect": false }
      ]
    },
    {
      "id": 2,
      "question": "Who is the Chief Minister of Kerala?",
      "options": [
        { "id": 1, "text": "Pinarayi Vijayan", "isCorrect": true },
        { "id": 2, "text": "Oommen Chandy", "isCorrect": false },
        { "id": 3, "text": "Ramesh Chennithala", "isCorrect": false },
        { "id": 4, "text": "Achuthanandan", "isCorrect": false }
      ]
    }
  ]);

  const firstQuestion = questions[0]
 
  return (
    <div className='container'>
      
        <div className='title-text'>
          <h2>{firstQuestion.question}</h2>
        </div>
        <Card />
      
      
      
      </div>
  )
}

export default Container