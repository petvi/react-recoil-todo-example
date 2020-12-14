import React from 'react'
import './App.css'

import { atom, useRecoilState } from 'recoil'

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const todosState = atom({
  key: 'todosState',
  default: [],
})

function App() {
  const [todos] = useRecoilState(todosState)

  return (
    <div className="App">
      <TodoForm />
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </div>
  )
}

export default App
