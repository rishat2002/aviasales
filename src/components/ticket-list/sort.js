export const transferSort = (list, transferSortObj) => {
  const { oneTransfer, twoTransfer, threeTransfer, noTransfer, allTransfer } = transferSortObj;
  let sortList = list;
  if (allTransfer) {
    return list;
  }
  if (!oneTransfer) {
    sortList = sortList.filter((item) => item.segments[0].stops.length !== 1 && item.segments[1].stops.length !== 1);
  }
  if (!twoTransfer) {
    sortList = sortList.filter((item) => item.segments[0].stops.length !== 2 && item.segments[1].stops.length !== 2);
  }
  if (!threeTransfer) {
    sortList = sortList.filter((item) => item.segments[0].stops.length !== 3 && item.segments[1].stops.length !== 3);
  }

  if (!noTransfer) {
    sortList = sortList.filter((item) => item.segments[0].stops.length !== 0 && item.segments[1].stops.length !== 0);
  }

  return sortList;
};

export const filterSort = (list, filterSortObj) => {
  if (filterSortObj === 'cheap') {
    return list.sort((prevTicket, nextTicket) => {
      if (prevTicket.price > nextTicket.price) return 1;
      if (prevTicket.price === nextTicket.price) return 0;
      if (prevTicket.price < nextTicket.price) return -1;
      return 0;
    });
  }
  if (filterSortObj === 'faster') {
    return list.sort((prevTicket, nextTicket) => {
      if (prevTicket.segments[0].duration > nextTicket.segments[0].duration) return 1;
      if (prevTicket.segments[0].duration === nextTicket.segments[0].duration) return 0;
      if (prevTicket.segments[0].duration < nextTicket.segments[0].duration) return -1;
      return 0;
    });
  }
  return list;
};
