import {
  VISIBLE_MASS_LENGTH,
  LOADER_SPIN,
  MORE_BUTTON,
  INITIAL_STATE,
} from './action-const'

export interface IVisibleMassLength {
  type: typeof VISIBLE_MASS_LENGTH
}
export interface ILoaderSpin {
  type: typeof LOADER_SPIN
}
export interface IMoreButton {
  type: typeof MORE_BUTTON
}
export interface IInitialState {
  type: typeof INITIAL_STATE
}
