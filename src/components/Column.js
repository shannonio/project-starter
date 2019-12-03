import React, { useState } from 'react';
import './Column.scss';

import Card from './Card';

const Column = ({
  columnName,
  className,
  cards,
  updateColumnCards,
  moveCardLeft,
  moveCardRight,
}) => {

  const createNewCard = () => {
    const text = window.prompt();
    updateColumnCards(text);
  }

  return (
    <div className={`Column ${className}`}>
      <h3 className="name"> { columnName } </h3>

      {
        cards.map((text, index) => (
          <Card
          key={index}
          text={text}
          cardIndex={index}
          moveCardLeft={moveCardLeft}
          moveCardRight={moveCardRight}
          />
        ))
      }

      <button onClick={() => createNewCard()}> Add A Card </button>
    </div>
  );
}


export default Column;
