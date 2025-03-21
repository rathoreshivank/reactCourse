import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    console.log("Clicked", counter);
    
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("Clicked", counter);
    
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}>Add Value: {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}>Remove Value: {counter}</button>
    <p>footer: {counter}</p>
    </>
    
  )
}

export default App
