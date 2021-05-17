import {
  VISIBLE_MASS_LENGTH, INITIAL_STATE, LOADER_SPIN, MORE_BUTTON, 
} from './action-const'
import {
  IInitialState, ILoaderSpin, IMoreButton, IVisibleMassLength, 
} from './types'

export const visibleTickets = (): IVisibleMassLength => ({
  type: VISIBLE_MASS_LENGTH,
})
export const loadSpin = (): ILoaderSpin => ({ type: LOADER_SPIN })
export const moreButtonAction = (): IMoreButton => ({ type: MORE_BUTTON })
export const taskListLengthInitialState = (): IInitialState => ({
  type: INITIAL_STATE,
})
