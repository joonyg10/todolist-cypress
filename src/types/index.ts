import { SetStateAction, Dispatch } from 'react'

export type IUpdateState<T> = Dispatch<SetStateAction<T>>

export interface ITodo {
  id: string
  todo: string
  done: boolean
}
