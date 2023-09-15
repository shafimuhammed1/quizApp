import React from 'react';
import './Container.css'

function Container({question}) {
  return (
    <div className='container'>
      <div className='title-text'>
        <h2>{question}</h2>
      </div>
    </div>
  );
}

export default Container;
