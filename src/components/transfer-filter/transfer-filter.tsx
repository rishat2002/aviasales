import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from './checkbox'
import './index.scss'
import {
  selectAllTransfer,
  selectNoTransfer,
  selectOneTransfer,
  selectThreeTransfer,
  selectTwoTransfer,
} from '../../redux/transfer-filter-redux/transfer-filter-actions'
import { taskListLengthInitialState } from '../../redux/app-redux/app-actions'
import { RootState } from 'src'

const TransferFilter = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(taskListLengthInitialState())
  }, [])
  const checkboxs = useSelector((state: RootState) => state.transferReducer)
  /* eslint-disable */
  return (
    <section className="content__transfer-filter">
      <span className="content__transfer-filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className="content__transfer-filter-label">
        Все
        <Checkbox
          select={(event) => {
            dispatch(selectAllTransfer(event))
          }}
          checked={checkboxs.allTransfer}
        />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        Без пересадок
        <Checkbox
          select={(event) => {
            dispatch(selectNoTransfer(event))
          }}
          checked={checkboxs.noTransfer}
        />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        1 пересадка
        <Checkbox
          select={(event) => {
            dispatch(selectOneTransfer(event))
          }}
          checked={checkboxs.oneTransfer}
        />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        2 пересадки
        <Checkbox
          select={(event) => {
            dispatch(selectTwoTransfer(event))
          }}
          checked={checkboxs.twoTransfer}
        />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        3 пересадки
        <Checkbox
          select={(event) => {
            dispatch(selectThreeTransfer(event))
          }}
          checked={checkboxs.threeTransfer}
        />
        <span className="content__custom-checkbox"></span>
      </label>
    </section>
  )
  /* eslint-enable */
}

export default React.memo(TransferFilter)
