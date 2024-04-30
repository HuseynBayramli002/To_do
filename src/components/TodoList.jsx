import { useState } from "react"
import Form from "./Form"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4()

const TodoList = () => {
  const [todoValue, SetTodo] = useState([])
  const createTodo = todo => {
    SetTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
  }
  const deleteTodo = id => {
    SetTodo(todoValue.filter(todo => todo.id !== id))
  }
  const editTodo = id => {
    SetTodo(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }
  const editTask = (task, id) => {
    SetTodo(todoValue.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }

  return (
    <div className="container w-3/5 m-auto bg-gray-700 mt-20 p-8 rounded-md">
      <p className="text-white text-center text-3xl mb-8">To do List</p>
      <Form createTodoo={createTodo} />
      {
        todoValue.map((todo, idx) => (
          todo.isEditing ? (
            <Edit editTodo={editTask} task={todo} />
          ) : (
            <Todo todo={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))
      }
    </div>
  )
}

export default TodoList