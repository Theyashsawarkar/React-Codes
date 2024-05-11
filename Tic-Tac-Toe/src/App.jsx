import { useState } from "react"
import Square from "./components/Square"

function App() {

  const [boardState , setBoardState] = useState(Array(9).fill(null))

  function handleClick() {
    setBoardState = this.
  }

  return (
    <>
      <div className="grid">
        {boardState.map(( Square  , i) => (
           <Square key={i} value = {boardState[i]} onclick = {handleClick}/>
        ))}
      </div>
    </>
  )
}

export default App
