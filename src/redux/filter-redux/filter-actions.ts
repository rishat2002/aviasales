import { SELECT_CHEAP, SELECT_FASTER, SELECT_OPTIMAL } from './action-const'
import { ISelectCheap, ISelectFaster, ISelectOptimal } from './types'

export const selectCheap = (): ISelectCheap => ({ type: SELECT_CHEAP })
export const selectFaster = (): ISelectFaster => ({ type: SELECT_FASTER })
export const selectOptimal = (): ISelectOptimal => ({ type: SELECT_OPTIMAL })
