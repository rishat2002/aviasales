import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import { Spin } from 'antd'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import TicketList from '../ticket-list'
import TransferFilter from '../transfer-filter'
import Filter from '../filter/filter'
import './index.scss'
import { getAllTicketsFetch, getFirstTicketsFetch } from '../../redux/tickets-redux/tickets-actions'
import { loadSpin, moreButtonAction, visibleTickets } from '../../redux/app-redux/app-actions'
import { RootState } from '../..'

const App: React.FC = () => {
  const appState = useSelector((state: RootState) => state.appReducer)
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
  const { moreButton, loaderSpin } = appState
  useEffect(() => {
    const fetchTickets = () => {
      dispatch(getFirstTicketsFetch()).then(() => {
        dispatch(moreButtonAction())
      })
      dispatch(getAllTicketsFetch()).then(() => {
        dispatch(loadSpin())
      })
    }
    fetchTickets()
  }, [dispatch])

  const moreTicketButtonHandler = () => {
    dispatch(visibleTickets())
  }
  /*eslint-disable*/
  const loader = loaderSpin ? <Spin tip="Загрузка билетов..." /> : null
  const moreTicketButton = moreButton ? (
    <div className="content__more-ticket" onClick={moreTicketButtonHandler}>
      Показать еще 5 билетов
    </div>
  ) : null
  /* eslint-enable */
  return (
    <div className="content">
      <div className="content__burger" />
      <div className="content__main">
        <TransferFilter />
        <div className="content__block-ticketList-filter">
          <Filter />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0px',
            }}
          >
            {loader}
          </div>
          <TicketList />
          {moreTicketButton}
        </div>
      </div>
    </div>
  )
}

export default App
