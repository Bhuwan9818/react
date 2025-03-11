import { Context } from "./components/Context";
import ConsumerApp from "./components/ConsumerApp";
import Reducer from "./components/Rducer";

import React from 'react'

function App() {
  return (
    <Context.Provider value={{name: 'suraj',age:'18',IQ:'220',country:'Russia'}}>
      <div></div>
      <ConsumerApp></ConsumerApp>
      <Reducer></Reducer>
    </Context.Provider>
  )
}

export default App
