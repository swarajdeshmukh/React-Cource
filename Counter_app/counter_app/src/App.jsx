import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const RemoveValue = () => {
    setCount(count - 1)
  }

  const AddValue = () =>{
    setCount (count + 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {count} </h2>
      <button onClick={RemoveValue}>Remove value</button>{" "}
      <button onClick={AddValue}>Add Value</button>





    </>
  )
}

export default App
