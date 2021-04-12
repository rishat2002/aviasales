const parseServTickets = (ticketPackageList) => {
  let list = [...ticketPackageList];
  let i = 0;
  list = list.map((item) => {
    const objWithKey = { ...item, key: i };
    i += 1;
    return objWithKey;
  });
  return list;
};

const reducer = (state = [], action) => {
  if (action.type === 'FETCH-TICKETS' || action.type === 'FETCH-ALL-TICKETS') {
    return [...state, ...parseServTickets([...action.tickets])];
  }
  return state;
};

export default reducer;
