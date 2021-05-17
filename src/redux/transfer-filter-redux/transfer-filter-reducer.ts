import {
  ALL_TRANSFER, NO_TRANSFER, ONE_TRANSFER, THREE_TRANSFER, TWO_TRANSFER, 
} from './action-const'

type actionType = {
  type: string
  target: { checked: boolean }
}
const reducer = (
  state: {
    oneTransfer: boolean
    twoTransfer: boolean
    threeTransfer: boolean
    allTransfer: boolean
    noTransfer: boolean
  } = {
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
    allTransfer: true,
    noTransfer: true,
  },
  action: actionType,
) => {
  if (action.type === ALL_TRANSFER) {
    return Object.keys({ ...state }).reduce((acc: any, value) => {
      // @ts-ignore
      acc[value] = action.target.checked
      return acc
    }, {})
  }
  if (action.type === ONE_TRANSFER) {
    const obj = {
      ...state,
      oneTransfer: action.target.checked,
      allTransfer: true,
    }
    return {
      ...obj,
      allTransfer: Object.values(obj).filter((item) => !item).length === 0,
    }
  }
  if (action.type === TWO_TRANSFER) {
    const obj = {
      ...state,
      twoTransfer: action.target.checked,
      allTransfer: true,
    }
    return {
      ...obj,
      allTransfer: Object.values(obj).filter((item) => !item).length === 0,
    }
  }
  if (action.type === THREE_TRANSFER) {
    const obj = {
      ...state,
      threeTransfer: action.target.checked,
      allTransfer: true,
    }
    return {
      ...obj,
      allTransfer: Object.values(obj).filter((item) => !item).length === 0,
    }
  }
  if (action.type === NO_TRANSFER) {
    const obj = {
      ...state,
      noTransfer: action.target.checked,
      allTransfer: true,
    }
    return {
      ...obj,
      allTransfer: Object.values(obj).filter((item) => !item).length === 0,
    }
  }
  return state
}

export default reducer
