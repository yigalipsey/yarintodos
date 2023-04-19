import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addTask } from '../features/Task'
import { useState } from 'react'

function Form() {
  const [input, setInput] = useState()
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.todoList.tasks)

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(input)
    dispatch(addTask(input))
    reset()
  }

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='task'
            className='mb-2 font-bold text-lg text-gray-900'
          >
            הוסף משימה חדשה
          </label>
          <input
            type='text'
            id='task'
            name='task'
            className='border border-gray-400 p-2 rounded-lg'
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
        >
          שלח משימה
        </button>
      </form>
      <ul className='mt-4'>
        {tasks.map((task, index) => (
          <li key={index} className='mb-2'>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Form
