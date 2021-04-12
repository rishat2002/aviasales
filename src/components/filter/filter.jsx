import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/filter-actions';
import * as appActions from '../../redux/app-actions';

const Filter = ({ select, selectCheap, selectFaster, selectOptimal, taskListLengthInitialState }) => {
  useEffect(() => {
    taskListLengthInitialState();
  });
  let cheapClass = 'content__filter-button';
  let fasterClass = 'content__filter-button';
  let optimalClass = 'content__filter-button';
  if (select === 'cheap') {
    cheapClass = cheapClass.concat(' content__filter-button--push content__filter-button--left');
  } else if (select === 'faster') {
    fasterClass = fasterClass.concat(' content__filter-button--push');
  } else if (select === 'optimal') {
    optimalClass = optimalClass.concat(' content__filter-button--push content__filter-button--right');
  }
  return (
    <section className="content__filter">
      <button className={cheapClass} onClick={selectCheap} type="button">
        Самый дешевый
      </button>
      <button className={fasterClass} onClick={selectFaster} type="button">
        Самый быстрый
      </button>
      <button className={optimalClass} onClick={selectOptimal} type="button">
        Оптимальный
      </button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  select: state.filterReducer.select,
});

const mapDispatchToProps = (dispatch) => {
  const bind = bindActionCreators(actions, dispatch);
  const appBind = bindActionCreators(appActions, dispatch);
  return {
    ...bind,
    taskListLengthInitialState: appBind.taskListLengthInitialState,
  };
};

Filter.defaultProps = {
  select: 'optimal',
  selectCheap: () => {},
  selectFaster: () => {},
  selectOptimal: () => {},
  taskListLengthInitialState: () => {},
};

Filter.propTypes = {
  select: PropTypes.string,
  selectCheap: PropTypes.func,
  selectFaster: PropTypes.func,
  selectOptimal: PropTypes.func,
  taskListLengthInitialState: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
