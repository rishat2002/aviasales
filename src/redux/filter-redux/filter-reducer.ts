import { SELECT_CHEAP, SELECT_FASTER, SELECT_OPTIMAL } from './action-const'

type stateType = { select: 'optimal' | 'cheap' | 'faster' }
type actionType = {
  type: typeof SELECT_OPTIMAL | typeof SELECT_FASTER | typeof SELECT_CHEAP
}
const reducer = (state: stateType = { select: 'optimal' }, action: actionType): stateType => {
  switch (action.type) {
    case 'SELECT_CHEAP':
      return { select: 'cheap' }

    case 'SELECT_FASTER':
      return { select: 'faster' }

    case 'SELECT_OPTIMAL':
      return { select: 'optimal' }

    default:
      return state
  }
}

export default reducer
