
import {
  Todos,
  AddTodo,
} from './Components'

function App() {
  return (
    <div className='bg-gray-600 overflow-auto mx-auto flex flex-col justify-center items-center h-[100vh] w-[100vw] '>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
