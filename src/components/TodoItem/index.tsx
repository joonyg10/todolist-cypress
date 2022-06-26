import React, { useState } from 'react'
import * as S from './styles'
import * as T from '../../types'
import { Icon } from '../'
import { Checkbox } from '../Checkbox'

interface IProps {
  todo: T.ITodo
  toggleComplete: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, newTodo: string) => void
}
export const TodoItem = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}: IProps) => {
  const [newTodo, setNewTodo] = useState<string>(todo.todo ?? '')
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const toggleEditMode = () => {
    if (isEditMode) editTodo(todo.id, newTodo)
    setIsEditMode((prev) => !prev)
  }

  const _updateEditTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target instanceof HTMLInputElement && setNewTodo(e.target.value)
  }

  const _editTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    toggleEditMode()
  }

  return (
    <li>
      <S.Container>
        <Checkbox
          checked={todo.done}
          onChange={() => toggleComplete(todo.id)}
        />

        {isEditMode ? (
          <S.Input
            value={newTodo}
            onInput={_updateEditTodo}
            placeholder="Enter Your new todo"
            onKeyDown={_editTodo}
          />
        ) : (
          <S.Typography>{todo.todo}</S.Typography>
        )}
        <Icon type="EDIT" onClick={toggleEditMode} />
        <Icon type="DELETE" onClick={() => deleteTodo(todo.id)} />
      </S.Container>
    </li>
  )
}
