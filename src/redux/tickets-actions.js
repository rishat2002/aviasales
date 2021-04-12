import AviaSalesService from '../avia-service/avia-service';

const serv = new AviaSalesService();

export function getFirstTicketsFetch() {
  return async (dispatch) => {
    await serv.getSearchId();
    const getObj = await serv.getFirstPackageTickets();
    dispatch({ type: 'FETCH-TICKETS', tickets: getObj });
  };
}

export function getAllTicketsFetch() {
  return async (dispatch) => {
    await serv.getSearchId();
    const getObj = await serv.getAllPackageTickets();
    dispatch({ type: 'FETCH-ALL-TICKETS', tickets: getObj });
  };
}
