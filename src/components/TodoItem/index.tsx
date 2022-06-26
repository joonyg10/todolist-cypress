import React, { useState } from 'react'
import * as S from './styles'
import * as T from '../../types'
import { Icon } from '../'
import { Checkbox } from '../Checkbox'

interface IProps {
  todo: T.ITodo
  toggleComplete: (id: string) => void
  deleteTodo: (id: string) => void
}
export const TodoItem = ({ todo, toggleComplete, deleteTodo }: IProps) => {
  const [editTodo, setEditTodo] = useState<string>(todo.todo ?? '')
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const toggleEditMode = () => setIsEditMode((prev) => !prev)

  const _updateEditTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target instanceof HTMLInputElement && setEditTodo(e.target.value)
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
            value={editTodo}
            onInput={_updateEditTodo}
            placeholder="Enter Your new todo"
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
