
import React from 'react'

import './App.css'

function App() {


  const [count , setCount] = React.useState(0)
  return (
    <div className='full'>
      <h1> {count} </h1>

      <div>
        <button onClick={() => setCount( (prevCount) => prevCount <= 0 ? 0 : prevCount-1)}>
          Reduce 
        </button>

        <button onClick={() => setCount( (prevCount) => prevCount >= 20 ? 20 : prevCount+1)}>
          Increase
        </button>
        <p>
          { "0 >= Count <= 20" }
        </p>
      </div>
    </div>
  )
}

export default App
