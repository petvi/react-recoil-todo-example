import React, { useState } from 'react'
import { atom, useRecoilState } from 'recoil'

const todosState = atom({
  key: 'todosState',
  default: [],
})

export default function TodoForm() {
  const [todos, setTodos] = useRecoilState(todosState)
  const [text, setText] = useState('')

  const addTodo = event => {
    if (!text) return

    const todo = {
      id: todos.length + 1,
      text,
      isCompleted: false,
    }

    setTodos([...todos, todo])
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
      />
      <button onClick={() => addTodo()}>Add</button>
    </div>
  )
}
