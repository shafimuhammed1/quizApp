import React,{useState} from 'react';
import './Card.css';

function Card() {
  const [state,setState]=useState(0)




  return (

    <div className='Card'>

      <div className='Card-container'>
      <div class="question-card">
       <h4 className='ans' onClick={()=>{
       
       }} ><b></b></h4>
      </div>
     <div class="question-card1">
      <h4 className='ans'><b>John Doe</b></h4>
     </div>
     <div class="question-card2">
      <h4 className='ans'><b>John Doe</b></h4>
     </div>
     <div class="question-card3">
      <h4 className='ans'><b>John Doe</b></h4>
     </div>
     </div>
    </div>
 )
}

export default Card;
