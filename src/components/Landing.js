import React, { useState } from 'react';
import './Landing.scss';

const UNSTARTED = 'unstarted';
const RUNNING = 'running';
const PASSED = 'passed';
const FAILED = 'failed';

function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}

const testsInit = [
  {
    description: "commas are rotated properly",
    run: generateDummyTest(),
    state: UNSTARTED,
  },
  {
    description: "exclamation points stand up straight",
    run: generateDummyTest(),
    state: UNSTARTED,
  },
  {
    description: "run-on sentences don't run forever",
    run: generateDummyTest(),
    state: UNSTARTED,
  },
  {
    description: "question marks curl down, not up",
    run: generateDummyTest(),
    state: UNSTARTED,
  },
  {
    description: "semicolons are adequately waterproof",
    run: generateDummyTest(),
    state: UNSTARTED,
  },
  {
    description: "capital letters can do yoga",
    run: generateDummyTest(),
    state: UNSTARTED,
  }
];

const Landing = () => {
  const [tests, updateTests] = useState(testsInit);

  const updateState = (idx) => {
    const newTests = [...tests];
    newTests[idx].state = RUNNING;
    updateTests(newTests);

    return (testPassed) => {
      const newTests = [...tests];
      newTests[idx].state = testPassed ? PASSED : FAILED;
      updateTests(newTests);
    }
  }

  const runAllTests = () => {
    tests.forEach((test, idx) => {
      test.run(updateState(idx));
    });
  }

  const testList = () => {
    return tests.map((test, idx) => {
      return (
        <li key={idx}>
          <p>
            { test.description }
          </p>
          <p>
            { test.state }
          </p>
        </li>
      )
    });
  }

  return (
    <div className="Landing">
      <div>
        <button onClick={() => runAllTests()}>Run Tests</button>
        <p>Running: {tests.filter((test) => test.state === RUNNING).length}</p>
        <p>Failed: {tests.filter((test) => test.state === FAILED).length}</p>
        <p>Passed: {tests.filter((test) => test.state === PASSED).length}</p>
        <p>
          {
            tests.filter((test) => test.state === RUNNING).length === 0 ? 'FINISHED' : ''
          }
        </p>
      </div>
      <ul>
        { testList() }
      </ul>
    </div>
  );
}


export default Landing;
