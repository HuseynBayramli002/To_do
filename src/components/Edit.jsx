import { useState } from "react"

const Edit = ({ editTodo,task }) => {
  const [value, SetValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    editTodo(value, task.id)
    SetValue('')
  }
  return (
    <form className="mb-4 w-full" onSubmit={handleSubmit}>
      <input type="text" className="outline-none bg-transparent border border-gray-500 p-4
           w-[300px] text-white mb-8 rounded placeholder:s-gray-300" placeholder="Update your task..."
        onChange={(e) => SetValue(e.target.value)} value={value} />
      <button className="bg-gray-700 border-none p-2  text-white cursor-pointer rounded ml-2">Update Task</button>
    </form>
  )

}

export default Edit