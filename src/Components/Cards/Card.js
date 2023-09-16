import React from 'react'
import './Card.css'


function Card({ option, handleCardClick }) {
  return (
    <div className='Card'>
      <div className='Card-container'  >
        {option.map((option)=>(
        <div className='question-card' onClick={() => handleCardClick(option)}>
          <h4 className='ans'><b>{option.text}</b></h4>
        </div>
      ))}
       </div>
    </div>
  );
}
export default Card
