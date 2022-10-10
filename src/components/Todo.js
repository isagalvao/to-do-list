import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    title: '',
    description: '',
    check: false
  })

  const submitUpdate = todo => {
    updateTodo(edit.id, todo)
    setEdit({
      id: null,
      title: '',
      description: '',
      check: false
    })
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <div className="todo-items">
      {todos.map((todo, index) => (
        <div
          className={todo.check ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.check}
            onChange={() => completeTodo(todo.id)}
          />
          <div className="todo-text">
            <h1 className="title-list">{todo.text}</h1>
            <p>{todo.description}</p>
            <span>{todo.createdDate.toDateString()}</span>
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() =>
                setEdit({
                  id: todo.id,
                  title: todo.text,
                  description: todo.description,
                  check: todo.check
                })
              }
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todo
