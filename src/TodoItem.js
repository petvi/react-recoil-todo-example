import React from 'react'

export default function TodoItem({ todo }) {
  return (
    <div>
      <strong>
        #{todo.id}: {todo.text}
      </strong>
    </div>
  )
}
