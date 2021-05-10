import { SELECT_CHEAP, SELECT_FASTER, SELECT_OPTIMAL } from './action-const'

export interface ISelectCheap {
  type: typeof SELECT_CHEAP
}
export interface ISelectFaster {
  type: typeof SELECT_FASTER
}
export interface ISelectOptimal {
  type: typeof SELECT_OPTIMAL
}
