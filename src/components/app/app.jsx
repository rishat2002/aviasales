
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import "antd/dist/antd.css";
import {bindActionCreators} from 'redux';
import {Spin} from 'antd';
import * as actions from '../../redux/tickets-actions';
import * as appActions from '../../redux/app-actions';
import TicketList from '../ticket-list'
import TransferFilter from '../transfer-filter'
import Filter from '../filter/filter'
import './index.scss'



const App = ({getPackageTicketsBind, appActionsBind,loaderSpin,moreButton }) => {
    const {getFirstTicketsFetch,getAllTicketsFetch} = getPackageTicketsBind
    const {visibleTickets,loadSpin,moreButtonAction} = appActionsBind

    /* eslint-disable */

    useEffect(() => {
        const fetchTickets = () => {
            getFirstTicketsFetch().then(() => {
                loadSpin()
                moreButtonAction()
            })
            getAllTicketsFetch().then(() => {
                loadSpin()
            })
        }
       fetchTickets() 
    }, [])

    const moreTicketButtonHandler = ( ) => {
    visibleTickets()
    }
    const loader =  loaderSpin?<Spin tip="Загрузка билетов..." />:null
    const moreTicketButton = moreButton? <div type = 'button' className='content__more-ticket'
                                              onClick={moreTicketButtonHandler}>Показать еще 5 билетов
    </div>:null
    /* eslint-enable */
    return (
        <div className='content'>
            <div className='content__burger'/>
            <div className="content__main">
                <TransferFilter/>
                <div className='content__block-ticketList-filter'>
                    <Filter/>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0px'}}>{loader}</div>
                    <TicketList/>
                    {moreTicketButton}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    const bind = bindActionCreators(actions, dispatch)
    const appBind = bindActionCreators(appActions,dispatch)
    return {
        getPackageTicketsBind: bind,
        appActionsBind:appBind
    }
};
const mapStateToProps = state =>
    ({loaderSpin: state.appReducer.loaderSpin,
        moreButton: state.appReducer.moreButton})

App.defaultProps = {
    getPackageTicketsBind:{},
    appActionsBind:{},
    loaderSpin:false,
    moreButton:true
}

App.propTypes = {
    getPackageTicketsBind:PropTypes.objectOf(PropTypes.func),
    appActionsBind:PropTypes.objectOf(PropTypes.func),
    loaderSpin:PropTypes.bool,
    moreButton:PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
