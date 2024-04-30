import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";

const Todo = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
      <p>{todo.task}</p>
      <div className="flex items-center gap-x-4">
        <AiFillEdit  onClick={() => editTodo(todo.id)}/>
        <BsFillTrash2Fill onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  )
}

export default Todo;

