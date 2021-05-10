import {
  INITIAL_STATE,
  LOADER_SPIN,
  MORE_BUTTON,
  VISIBLE_MASS_LENGTH,
} from './action-const'

type actionType = {
  type:
    | typeof LOADER_SPIN
    | typeof MORE_BUTTON
    | typeof VISIBLE_MASS_LENGTH
    | typeof INITIAL_STATE
}

const appReducer = (
  state = { visibleMassLength: 10, loaderSpin: true, moreButton: false },
  action: actionType,
) => {
  switch (action.type) {
    case 'VISIBLE-MASS-LENGTH': {
      const prevVisibleMassLength = state.visibleMassLength
      return { ...state, visibleMassLength: prevVisibleMassLength + 5 }
    }

    case 'LOADER-SPIN': {
      return { ...state, loaderSpin: !state.loaderSpin }
    }
    case 'MORE-BUTTON':
      return { ...state, moreButton: !state.moreButton }
    case 'INITIAL-STATE':
      return { ...state, visibleMassLength: 10 }
    default:
      return state
  }
}

export default appReducer
