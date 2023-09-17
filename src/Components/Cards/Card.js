import React from 'react'
import './Card.css'

function Card({ option, handleCardClick }) {
  const cardColors = ['#1e6ce8', '#2bc299', '#d6b822', '#db4474']; 


  return (
    <div className='Card'>
      <div className='Card-container'>
        {option.map((option, index) => (
          <div
            className='question-card'
            style={{ backgroundColor: cardColors[index % cardColors.length] }}
            onClick={() => handleCardClick(option)}
            key={index}
          >
            <h4 className='ans'><b>{option.text}</b></h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card

