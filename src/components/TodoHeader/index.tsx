import { useState } from 'react'
import * as S from './styles'
import * as T from '../../types'

interface IProps {
  setTodos: T.IUpdateState<T.ITodo[]>
}

export const TodoHeader = ({ setTodos }: IProps) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const typeNewTodo = (e: React.FormEvent<HTMLInputElement>) => {
    e.target instanceof HTMLInputElement && setNewTodo(e.target.value)
  }

  const clearInput = () => setNewTodo('')

  const addNewTodo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: '', todo: newTodo, done: false },
    ])
    clearInput()
  }

  return (
    <S.Cotnainer>
      <S.Heading>Your Todos</S.Heading>
      <form>
        <S.Input
          type="text"
          placeholder="Enter new todo"
          onInput={typeNewTodo}
        />

        <S.Button onClick={addNewTodo}>Add new todo</S.Button>
      </form>
    </S.Cotnainer>
  )
}
