import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GrCompliance } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import {
  updateTask,
  deleteTask,
  completeTask,
  updateNeed,
} from '../features/Task'

const List = () => {
  const tasks = useSelector((state) => state.todoList.tasks)
  const dispatch = useDispatch()

  const handleComplete = (id) => {
    dispatch(completeTask(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const handleUpdate = (id, newTitle) => {
    dispatch(updateTask({ id, newTitle }))
  }

  const [showUpdateInput, setShowUpdateInput] = useState(false)
  const [updateTitle, setUpdateTitle] = useState('')
  const [idTask, setId] = useState(null)

  const handleUpdateInputChange = (e) => {
    setUpdateTitle(e.target.value)
  }

  const handleUpdateSubmit = (id) => {
    dispatch(updateTask({ id, newTitle: updateTitle }))
    setShowUpdateInput(false)
    setUpdateTitle('')
  }

  const handleUpdat = (id) => {
    dispatch(updateNeed({ id }))
  }

  return (
    <ul className='mt-4   w-5/6 mx-auto'>
      {tasks.map((task, index) => (
        <li key={index} className={` border border-y-black`}>
          <div
            className={`flex items-center justify-between my-2 mx-3 ${
              task.completed ? 'bg-green-500' : ''
            }`}
          >
            <div className={`flex-1 mr-2 ${showUpdateInput && 'hidden'}`}>
              {task.title}
            </div>
            {/* && idTask === task.id */}
            <div className={`${!showUpdateInput && 'hidden'} `}>
              <input
                type='text'
                value={updateTitle}
                onChange={handleUpdateInputChange}
                className='p-1 border rounded'
              />
              <button
                className='mx-2 p-1  text-red-500 rounded'
                onClick={() => handleUpdateSubmit(task.id)}
              >
                Save
              </button>
              <button
                className='p-1 bg-red-500 text-white rounded'
                onClick={() => setShowUpdateInput(false)}
              >
                Cancel
              </button>
            </div>
            <div className='flex'>
              <button onClick={() => handleComplete(task.id)}>
                <GrCompliance />
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <AiFillDelete />
              </button>
              <button
                className=' p-1 bg-blue-500 text-white rounded'
                onClick={() => {
                  setShowUpdateInput(true)
                  handleUpdat(task.id)
                }}
              >
                עדכן משימה זו
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
