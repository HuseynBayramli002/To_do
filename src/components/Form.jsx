import { useState } from "react"

const Form = ({createTodoo} ) => {
  const [value, SetValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
  createTodoo(value)
    SetValue('')
  }
  return (
    <form className="mb-4 w-full" onSubmit={handleSubmit}>
      <input type="text" className="outline-none bg-transparent border border-gray-500 p-4
        w-3/4 text-white mb-8 rounded placeholder:s-gray-300" placeholder="What is your task..."
        onChange={(e) => SetValue(e.target.value)} value={value} />
      <button  className="bg-gray-700 border-none p-2 w-1/5  text-white cursor-pointer rounded ml-2">Add Task</button>
    </form>
  )
}

export default Form