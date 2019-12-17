import React from 'react';
import './App.scss';

import Nav from './containers/Nav';

function App() {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  return (
    <div className="App">
      <Nav
        playerOne={playerOne}
        playerTwo={playerTwo}
        setPlayerOne={setPlayerOne}
        setPlayerTwo={setPlayerTwo}
      />
    </div>
  );
}

export default App;
