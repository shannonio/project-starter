import React, { useState } from 'react';
import './Nav.scss';

const Nav = ({
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo
}) => {
  return (
    <div className="Nav">
      Name of 1st Player: <input onChange={setPlayerOne} value={playerOne} />
      Name of 2nd Player: <input onChange={setPlayerTwo} value={playerTwo} />
    </div>
  );
}


export default Nav;
