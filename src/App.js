import React, { useState } from 'react';
import CreateWork from './components/CreateWork';
import { SetsContext, WorkoutsContext } from './context/InputContext';

function App() {
  const[inputList, setInputList] = useState([{reps: "0", weight: "0", rest: "0"}]);
  const[inputWork, setInputWork] = useState([{work: ""}]);
  return (
    <>
      <SetsContext.Provider value={{ inputList, setInputList }}>
      <WorkoutsContext.Provider value={{ inputWork, setInputWork }}>
        <CreateWork />
      </WorkoutsContext.Provider>
      </SetsContext.Provider>
    </>
  );
}

export default App;
