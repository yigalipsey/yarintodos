import { createSlice } from '@reduxjs/toolkit'

let nextTaskId = 1

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  },

  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nextTaskId++,
        title: action.payload,
        completed: false,
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = true
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id)
      if (task) {
        task.title = action.payload.title
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
  },
})

export const { addTask, deleteTask, completeTask, updateTask } =
  todoListSlice.actions

export default todoListSlice.reducer
