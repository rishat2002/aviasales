import { ChangeEvent } from 'react'
import {
  ALL_TRANSFER, NO_TRANSFER, ONE_TRANSFER, THREE_TRANSFER, TWO_TRANSFER, 
} from './action-const'

export const selectOneTransfer = (event: ChangeEvent<HTMLInputElement>) => ({
  type: ONE_TRANSFER,
  target: event.target,
})
export const selectTwoTransfer = (event: ChangeEvent<HTMLInputElement>) => ({
  type: TWO_TRANSFER,
  target: event.target,
})
export const selectThreeTransfer = (event: ChangeEvent<HTMLInputElement>) => ({
  type: THREE_TRANSFER,
  target: event.target,
})
export const selectAllTransfer = (event: ChangeEvent<HTMLInputElement>) => ({
  type: ALL_TRANSFER,
  target: event.target,
})
export const selectNoTransfer = (event: ChangeEvent<HTMLInputElement>) => ({
  type: NO_TRANSFER,
  target: event.target,
})
