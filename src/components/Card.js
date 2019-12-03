import React, { useState } from 'react';

const Card = ({ cardIndex, text, moveCardLeft, moveCardRight }) => {

  return (
    <div className="Card">
      <button onClick={() => moveCardLeft(cardIndex) }> {`<`} </button>
      { text }
      <button onClick={() => moveCardRight(cardIndex) }> {`>`} </button>
    </div>
  );
}


export default Card;
