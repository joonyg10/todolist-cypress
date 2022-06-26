import { useState, useCallback } from 'react'
import { TodoHeader } from './components'
import { TodoItem } from './components/TodoItem'

import * as S from './styles/App.styles'
import * as T from './types'

function App() {
  const [todos, setTodos] = useState<T.ITodo[]>([])

  const deleteTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((_) => _.id !== id)),
    [setTodos],
  )

  const toggleComplete = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((_) => (_.id !== id ? _ : { ..._, done: !_.done })),
    )
  }, [])

  const editTodo = (id: string, newTodo: string) => {
    setTodos((prev) =>
      prev.map((_) => (_.id !== id ? _ : { ..._, todo: newTodo })),
    )
  }

  return (
    <S.Container>
      <S.Heading>Hello world</S.Heading>
      <S.TodosSection>
        {todos.map((todo: T.ITodo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </S.TodosSection>
      <TodoHeader setTodos={setTodos} />
    </S.Container>
  )
}

export default App
