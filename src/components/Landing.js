import React, { useState } from 'react';
import './Landing.scss';

import Things from '../data/thingList';

const Landing = () => {
  const [selectedThing, setThing] = useState('');

  return (
    <div className="Landing">
      You selected: { selectedThing || "-----" }
      <ul>
        { Things.map((name, idx) =>
          <li key={idx} onClick={() => setThing(name)}>{ name }</li>
        )}
      </ul>
    </div>
  );
}


export default Landing;
