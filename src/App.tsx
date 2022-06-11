import { useState } from 'react'
import { TodoHeader } from './components'

import * as T from './types'

function App() {
  const [todos, setTodos] = useState<T.ITodo[]>([])

  return (
    <>
      <h1>Hello world</h1>
      <TodoHeader setTodos={setTodos} />
      {todos.map((todo: T.ITodo) => (
        <p key={todo.id}>{todo.todo}</p>
      ))}
    </>
  )
}

export default App
