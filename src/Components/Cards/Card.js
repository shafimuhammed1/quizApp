import React from 'react'
import './Card.css'

function Card({ option, handleCardClick }) {
  return (
    <div className='Card' onClick={handleCardClick}>
      <div className='Card-container'>
        <div className='question-card'>
          <h4 className='ans'><b>{option.text}</b></h4>
        </div>
        <div className='question-card1'>
          <h4 className='ans'><b>{option.text}</b></h4>
        </div>
      </div>
    </div>
  );
}
export default Card
