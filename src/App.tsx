import { useState, useCallback } from 'react'
import { TodoHeader } from './components'
import { TodoItem } from './components/TodoItem'

import * as S from './styles/App.styles'
import * as T from './types'

function App() {
  const [todos, setTodos] = useState<T.ITodo[]>([
    { id: '1', todo: 'first todo', done: false },
    { id: '2', todo: 'second todo', done: false },
    { id: '3', todo: 'second todo', done: false },
  ])

  const deleteTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((_) => _.id !== id)),
    [setTodos],
  )

  const toggleComplete = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((_) => (_.id !== id ? _ : { ..._, done: !_.done })),
    )
  }, [])

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
          />
        ))}
      </S.TodosSection>
      <TodoHeader setTodos={setTodos} />
    </S.Container>
  )
}

export default App
