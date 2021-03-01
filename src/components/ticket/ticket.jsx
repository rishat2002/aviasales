
import React from 'react';
import './index.scss'
import PropTypes from 'prop-types';

const Ticket = ({ticketInfo}) =>{
  const {segments,price,carrier} = ticketInfo
  const burgerUrl = `http://pics.avs.io/110/36/${carrier}.png`;
  const viewInfo = (travelWay) => {
  const {date,destination,origin,duration,stops} = travelWay;
  const location = `${origin} - ${destination}`
  const transferCount=stops.length
  let transferString=`${transferCount} ПЕРЕСАДОК`
  if (transferCount%2===0 || transferCount%3===0) {
    transferString=`${transferCount} ПЕРЕСАДКИ`
  }
  if (transferCount===0) {
    transferString='БЕЗ ПЕРЕСАДОК'
  }
  if (transferCount===1) {
    transferString='1 ПЕРЕСАДКА'
  }
  const transferCities = stops.join(', ')
  const durationHours = Math.floor(duration/60)
  const durationMin = durationHours%60
  const travelTime = `${durationHours} ч ${durationMin} мин`
  const stringWithInfoStyle = {
    display:'flex',
    width:'100%',
    flexWrap:'wrap',
    marginBottom:10
  }
  const hour = date.substring(11,13);
  const min = date.substring(14,16)
  const departureTime = `${hour}:${min}`
  const hourLandingTime = (Number(hour)+durationHours)>=24?(Number(hour)+durationHours)%24:Number(hour)+durationHours;
  const minLandingtime = (Number(min)+durationMin)>=60?(Number(min)+durationMin)%60:Number(min)+durationMin
  const landingTime = `${hourLandingTime}:${minLandingtime}`
  return (
    <div style ={stringWithInfoStyle}>
    <div className = 'card__header'>{location}</div>
    <div className = 'card__header'>В пути</div>
    <div className = 'card__header'>{transferString}</div>
    <div className = 'card__info'>{`${departureTime} - ${landingTime}`}</div>
    <div className = 'card__info'>{travelTime}</div>
    <div className = 'card__info'>{transferCities}</div>
    </div>
  )
  }
    return (
    <div className='card'>
      <div className='card__price'>{`${price.toLocaleString()} Р`}</div>
      <img className='card__burger' src={burgerUrl} alt='aviacompany brand'/>
      {viewInfo(segments[0])}
      {viewInfo(segments[1])}
    </div>
    );
}

Ticket.defaultProps = {
  ticketInfo:{segments:[],
    price:'0',
    carrier:' '
  }
}

Ticket.propTypes = {
  ticketInfo: PropTypes.objectOf(PropTypes.any)
}
export default Ticket;

