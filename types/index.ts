import { SetStateAction, Dispatch } from 'react'

export type IUpdateState<T> = SetStateAction<Dispatch<T>>

export interface ITodo {
  id: string
  todo: string
  done: boolean
}
