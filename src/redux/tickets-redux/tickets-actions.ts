import { Dispatch } from 'redux'
import AviaSalesService from '../../avia-service/avia-service'

const serv = new AviaSalesService()

export type wayInfoType = {
  date: string
  destination: string
  duration: number
  origin: string
  stops: Array<string>
}

export interface servTicketType {
  carrier: string
  price: number
  segments: [wayInfoType, wayInfoType]
}

export function getFirstTicketsFetch(): (dispatch: Dispatch) => Promise<any> {
  return async (dispatch: Dispatch): Promise<any> => {
    await serv.getSearchId()
    const getObj: Array<servTicketType> | null = await serv.getFirstPackageTickets()
    dispatch({ type: 'FETCH-TICKETS', tickets: getObj })
  }
}

export function getAllTicketsFetch(): (dispatch: Dispatch) => Promise<any> {
  return async (dispatch: Dispatch): Promise<any> => {
    await serv.getSearchId()
    const getObj: Array<servTicketType> = await serv.getAllPackageTickets()
    dispatch({ type: 'FETCH-ALL-TICKETS', tickets: getObj })
  }
}
