import { useState } from 'react'
import { TodoHeader } from './components'

import * as S from './styles/App.styles'
import * as T from './types'

function App() {
  const [todos, setTodos] = useState<T.ITodo[]>([
    { id: '1', todo: 'first todo', done: false },
  ])

  return (
    <S.Container>
      <S.Heading>Hello world</S.Heading>
      <S.TodosSection>
        {todos.map((todo: T.ITodo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </S.TodosSection>
      <TodoHeader setTodos={setTodos} />
    </S.Container>
  )
}

export default App
