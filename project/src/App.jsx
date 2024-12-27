import { useState } from 'react'
import './App.css'
import ToDoCreate from './Component/ToDoCreate'
import ToDoList from './Component/ToDoList'
import { CgLaptop } from 'react-icons/cg';

function App() {
  const [todos, setTodo] = useState([]);
  const createTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  }
  const removeTodo = (todoId) => {
    setTodo([...todos.filter((todo) => todo.id !== todoId)]);
    console.log(extractedArray);

  }

  console.log(todos);
  return (
    <div className='App'>
      <div className='main'>
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList todos={todos} onRemove={removeTodo} />
      </div>
    </div>
  )
}

export default App
