import { useState } from 'react'
import './App.css'

import { Card } from './components/Card'

function App() {
  let [valueg, setValueg] = useState('khatma')

  function getValue(value) {
    setValueg(value)
  }

  return (
    <div className='text-[5rem] bg-green-950 rounded-full px-56 py-72 text-yellow-300'>
      <Card fun={getValue} jalva={"ho jalva"} />
      {valueg}
    </div>
  )
}

export default App
