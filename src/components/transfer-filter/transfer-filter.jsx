import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../redux/app-actions';
import Checkbox from './checkbox';
import './index.scss';
import * as actions from '../../redux/transfer-filter-actions';

const TransferFilter = ({
  checkboxs,
  selectOneTransfer,
  selectTwoTransfer,
  selectThreeTransfer,
  selectAllTransfer,
  selectNoTransfer,
  taskListLengthInitialState,
}) => {
  useEffect(() => taskListLengthInitialState());
  /* eslint-disable */
  return (
    <section className="content__transfer-filter">
      <span className="content__transfer-filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className="content__transfer-filter-label">
        Все
        <Checkbox select={selectAllTransfer} checked={checkboxs.allTransfer} />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        Без пересадок
        <Checkbox select={selectNoTransfer} checked={checkboxs.noTransfer} />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        1 пересадка
        <Checkbox select={selectOneTransfer} checked={checkboxs.oneTransfer} />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        2 пересадки
        <Checkbox select={selectTwoTransfer} checked={checkboxs.twoTransfer} />
        <span className="content__custom-checkbox"></span>
      </label>
      <label className="content__transfer-filter-label">
        3 пересадки
        <Checkbox select={selectThreeTransfer} checked={checkboxs.threeTransfer} />
        <span className="content__custom-checkbox"></span>
      </label>
    </section>
  );
  /* eslint-enable */
};

const mapStateToProps = (state) => ({
  checkboxs: state.transferReducer,
});

const mapDispatchToProps = (dispatch) => {
  const bind = bindActionCreators(actions, dispatch);
  const appBind = bindActionCreators(appActions, dispatch);
  return { ...bind, taskListLengthInitialState: appBind.taskListLengthInitialState };
};

TransferFilter.defaultProps = {
  checkboxs: {},
  selectOneTransfer: () => {},
  selectTwoTransfer: () => {},
  selectThreeTransfer: () => {},
  selectAllTransfer: () => {},
  selectNoTransfer: () => {},
  taskListLengthInitialState: () => {},
};

TransferFilter.propTypes = {
  checkboxs: PropTypes.objectOf(PropTypes.bool),
  selectOneTransfer: PropTypes.func,
  selectTwoTransfer: PropTypes.func,
  selectThreeTransfer: PropTypes.func,
  selectAllTransfer: PropTypes.func,
  selectNoTransfer: PropTypes.func,
  taskListLengthInitialState: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFilter);
