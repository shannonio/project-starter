import React, { useState } from 'react';
import './App.scss';

import Nav from './containers/Nav';
import Column from './components/Column';

function App() {
  const initialColumns = [
    {
      columnName: 'Winnie',
      cards: [],
    },
    {
      columnName: 'Bob',
      cards: [],
    },
    {
      columnName: 'Thomas',
      cards: [],
    },
    {
      columnName: 'George',
      cards: [],
    },
  ];

  const [ columns, updateColumns ] = useState(initialColumns)

  const updateColumnCards = (index) => {
    return (newCard) => {
      const newColumns = Object.assign([], columns);
      const currentColumn = newColumns[index];
      currentColumn.cards = currentColumn.cards.concat(newCard);
      updateColumns(newColumns);
    }
  }

  const deleteCard = (cardIndex, columnIndex) => {
    const newColumns = Object.assign([], columns);
    const currentColumn = newColumns[columnIndex];
    const deletedCard = currentColumn.cards.splice(cardIndex, 1);
    updateColumns(newColumns);
    return deletedCard;
  }

  const moveCardLeft = (columnIndex) => {

    return (cardIndex) => {
      const card = deleteCard(cardIndex, columnIndex);
      updateColumnCards(columnIndex - 1)(card);
    }

  }

  const moveCardRight = (columnIndex) => {

    return (cardIndex) => {
      const card = deleteCard(cardIndex, columnIndex);
      updateColumnCards(columnIndex + 1)(card);
    }
  }

  return (
    <div className="App">
      <div className="column-container">
        { columns.map((columnProps, index) => (
            <Column
              className={columnProps.columnName}
              key={index}
              updateColumnCards={updateColumnCards(index)}
              moveCardLeft={moveCardLeft(index)}
              moveCardRight={moveCardRight(index)}
              { ...columnProps }
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
