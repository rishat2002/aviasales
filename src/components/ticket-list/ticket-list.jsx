import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ticket from '../ticket';
import { filterSort, transferSort } from './sort';
import * as appActions from '../../redux/app-actions';

const TicketList = ({
                      filter, ticketList, transferFilter,
                      visibleTicketsLength,moreButtonAction
                    }) => {

  const transferSortTicketList = useMemo(() => transferSort(ticketList, transferFilter)
  , [transferFilter, ticketList]);

  const filterAndTransferSortTicketList = filterSort(transferSortTicketList, filter);
  const visibleMass = [];
  if (filterAndTransferSortTicketList.length > 0) {
    for (let i = 0; i < visibleTicketsLength; i++) {
      visibleMass.push(filterAndTransferSortTicketList[i]);
    }
  }

  let list = visibleMass.map((item) => <Ticket ticketInfo={item} key={item.key} />);
  if(ticketList.length!==0 && filterAndTransferSortTicketList.length===0) {
    moreButtonAction()
    list = <li className='content__tickets-not-found'>Рейсов, подходящих под заданные фильтры, не найдено</li>
  }
  return <ul style={{ padding: 0 }}>{list}</ul>;
};

const mapStateToProps = (state) =>
    ({
    ticketList: state.ticketsReducer,
    filter: state.filterReducer.select,
    transferFilter: state.transferReducer,
    visibleTicketsLength: state.appReducer.visibleMassLength,
  })


const mapDispatchToProps = (dispatch) => {
  const appBind = bindActionCreators(appActions,dispatch)
  return {
    moreButtonAction:appBind.moreButtonAction
  }
};

TicketList.defaultProps = {
  filter:'optimal',
  ticketList:[],
  transferFilter:{},
  visibleTicketsLength:10,
  moreButtonAction:() => {}
}

TicketList.propTypes = {
  filter:PropTypes.string,
  ticketList:PropTypes.arrayOf(PropTypes.object),
  transferFilter:PropTypes.objectOf(PropTypes.bool),
  visibleTicketsLength:PropTypes.number,
  moreButtonAction:PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(TicketList);

