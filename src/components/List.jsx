import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, completeTask, updateTask } from '../features/Task'
import { GrCompliance } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'

function List() {
  const [isOpen, setIsOpen] = useState(false)
  const tasks = useSelector((state) => state.todoList.tasks)
  const dispatch = useDispatch()
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId))
  }
  const handleComplete = (taskId) => {
    dispatch(completeTask(taskId))
  }
  const handleUpdate = (taskId, newTitle) => {
    dispatch(updateTask({ id: taskId, title: newTitle }))
  }
  return (
    <ul className='mt-4'>
      <div>
        {tasks.map((task, index) => (
          <li className={task.completed ? 'text-green-500' : ''} key={index}>
            <div className=' my-2 mx-3'>
              <div className={`  w-[90%] overflow-x-scroll `}>{task.title}</div>
              <button onClick={() => handleComplete(task.id)}>
                <GrCompliance />
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <AiFillDelete />
              </button>
              <button onClick={() => handleUpdate(task.id, 'New Title')}>
                עדכן משימה זו
              </button>
              {}
            </div>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default List
