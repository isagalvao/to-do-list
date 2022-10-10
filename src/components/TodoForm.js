import React, { useState } from 'react'

function TodoForm(props) {
  const [inputTitle, setInputTitle] = useState(props.edit?.title || '')

  const [inputDescription, setInputDescription] = useState(
    props.edit?.description || ''
  )

  const handleChangeTitle = e => {
    setInputTitle(e.target.value)
  }
  const handleChangeDescription = e => {
    setInputDescription(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputTitle,
      description: inputDescription,
      createdDate: new Date(),
      check: props.edit?.check || false
    })
    setInputTitle('')
    setInputDescription('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a title..."
        value={inputTitle}
        name="title"
        className="todo-input"
        onChange={handleChangeTitle}
      />
      <input
        type="text"
        placeholder="Add a description..."
        value={inputDescription}
        name="Description"
        className="todo-input"
        onChange={handleChangeDescription}
      />
      <button className="todo-button">Add</button>
    </form>
  )
}

export default TodoForm
