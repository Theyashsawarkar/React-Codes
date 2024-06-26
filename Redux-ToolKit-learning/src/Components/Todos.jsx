
import { useSelector} from 'react-redux'
import Todo from './Todo'

function Todos() {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
    </>
  )
}

export default Todos
