import { servTicketType } from './tickets-actions'

export interface componentTicketType extends servTicketType {
  key: number
}
const parseServTickets = function (
  ticketPackageList: Array<servTicketType>,
): Array<componentTicketType> {
  let i: number = 0
  const list: componentTicketType[] = [...ticketPackageList].map((item) => {
    const objWithKey = { ...item, key: i }
    i += 1
    return objWithKey
  })
  return list
}
type actionType = {
  type: string
  tickets: servTicketType[]
}
const reducer = (state: componentTicketType[] = [], action: actionType) => {
  if (action.type === 'FETCH-TICKETS' || action.type === 'FETCH-ALL-TICKETS') {
    return [...state, ...parseServTickets([...action.tickets])]
  }
  return state
}

export default reducer
