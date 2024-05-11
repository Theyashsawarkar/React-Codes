
import arr from './Utils/Buttons-data.js'
import Button from './Components/Button'
import { useState } from 'react'

function App() {

  let [color , setColor] = useState('gray')

  function handleBgChange(changedColor) {
    setColor(changedColor)
  }

  let buttons = arr.map((obj) => (
    <Button key={obj.id} color={obj.id} changeColor={handleBgChange}/>
  ))

  return (
    <div style={{backgroundColor: color}}
    className='w-[100vw] h-[100vh] mx-0 my-0 flex justify-center items-end'>
      <div className='w-full mx-24 py-3 px-2 mb-5 rounded-xl h-50px flex justify-around bg-white'>
        {buttons}
      </div>
    </div>
  )
}

export default App
