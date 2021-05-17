import React, { useEffect } from 'react'
import './index.scss'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { taskListLengthInitialState } from '../../redux/app-redux/app-actions'
import { selectCheap, selectFaster, selectOptimal } from '../../redux/filter-redux/filter-actions'
import { RootState } from '../../index'

const useActiveButtonStyle = (): {
  cheapClass: string
  fasterClass: string
  optimalClass: string
} => {
  const select = useSelector((state: RootState) => state.filterReducer.select)
  let cheapClass = 'content__filter-button'
  let fasterClass = 'content__filter-button'
  let optimalClass = 'content__filter-button'
  if (select === 'cheap') {
    cheapClass = cheapClass.concat(' content__filter-button--push content__filter-button--left')
  } else if (select === 'faster') {
    fasterClass = fasterClass.concat(' content__filter-button--push')
  } else if (select === 'optimal') {
    optimalClass = optimalClass.concat(' content__filter-button--push content__filter-button--right')
  }
  return {
    cheapClass,
    fasterClass,
    optimalClass,
  }
}

const Filter: React.FC = () => {
  const dispatch: Dispatch = useDispatch()
  useEffect(() => {
    dispatch(taskListLengthInitialState())
  }, [dispatch])
  console.log('filter render')
  const { cheapClass, fasterClass, optimalClass } = useActiveButtonStyle()
  return (
    <section className="content__filter">
      <button className={cheapClass} onClick={() => dispatch(selectCheap())} type="button">
        Самый дешевый
      </button>
      <button className={fasterClass} onClick={() => dispatch(selectFaster())} type="button">
        Самый быстрый
      </button>
      <button className={optimalClass} onClick={() => dispatch(selectOptimal())} type="button">
        Оптимальный
      </button>
    </section>
  )
}

export default React.memo(Filter)
