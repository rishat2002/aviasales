import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../ticket';
import { filterSort, transferSort } from './sort';
import { RootState } from '../../index';
import { componentTicketType } from '../../redux/tickets-redux/tickets-reducer';

const useSortMass = () => {
  const visibleMass:componentTicketType[] = [];
  const newState = useSelector((state:RootState) => state);
  const ticketList = newState.ticketsReducer;
  const filter = newState.filterReducer.select;
  const transferFilter = newState.transferReducer;
  const transferSortTicketList = useMemo(() => transferSort(ticketList, transferFilter),
    [transferFilter, ticketList]);
  const filterAndTransferSortTicketList = filterSort(transferSortTicketList, filter);
  const visibleTicketsLength = newState.appReducer.visibleMassLength
  if (filterAndTransferSortTicketList.length > 0) {
    for (let i = 0; i < visibleTicketsLength; i += 1) {
      // @ts-ignore
      visibleMass.push(filterAndTransferSortTicketList[i])
    }
  }
  return visibleMass;
};

const TicketList:React.FC = () => {
  console.log('transfer render')
  const visibleMass = useSortMass();
  const newState = useSelector((state:RootState) => state);
  const ticketList = newState.ticketsReducer;
  let list:JSX.Element[]|JSX.Element = visibleMass.map((item) =>
    <Ticket ticketInfo={item} key={item.key}/>);
  if (list.length === 0 && ticketList.length !== 0) {
    list = <li className="content__tickets-not-found">Рейсов, подходящих под заданные фильтры, не найдено</li>;
  }
  return <ul style={{ padding: 0 }}>{list}</ul>;
};

export default TicketList;
