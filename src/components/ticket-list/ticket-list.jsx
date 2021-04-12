import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import Ticket from '../ticket';
import { filterSort, transferSort } from './sort';
import * as appActions from '../../redux/app-actions';
/*eslint-disable*/
const useSortMass = () => {
  const visibleMass = [];
  const newState = useSelector((state) => state);
  const ticketList = newState.ticketsReducer;
  const filter = newState.filterReducer.select;
  const transferFilter = newState.transferReducer;
  const visibleTicketsLength = newState.appReducer.visibleMassLength;
  const transferSortTicketList = useMemo(() => transferSort(ticketList, transferFilter), [transferFilter, ticketList]);
  const filterAndTransferSortTicketList = filterSort(transferSortTicketList, filter);
  if (filterAndTransferSortTicketList.length > 0) {
    for (let i = 0; i < visibleTicketsLength; i++) {
      visibleMass.push(filterAndTransferSortTicketList[i]);
    }
  }
  return visibleMass
};

const TicketList = ({ ticketList, moreButtonAction }) => {
  const visibleMass = useSortMass()
  let list = visibleMass.map((item) => <Ticket ticketInfo={item} key={item.key} />);
  if (ticketList.length !== 0 ) {
    moreButtonAction();
    list = <li className="content__tickets-not-found">Рейсов, подходящих под заданные фильтры, не найдено</li>;
  }
  return <ul style={{ padding: 0 }}>{list}</ul>;
};


const mapDispatchToProps = (dispatch) => {
  const appBind = bindActionCreators(appActions, dispatch);
  return {
    moreButtonAction: appBind.moreButtonAction,
  };
};

TicketList.protoTypes = {
  ticketList: PropTypes.arrayOf(PropTypes.any),
  moreButtonAction:PropTypes.func
}

TicketList.defaultProps = {
  ticketList: [],
  moreButtonAction: () => {},
};


export default connect(null, mapDispatchToProps)(TicketList);
