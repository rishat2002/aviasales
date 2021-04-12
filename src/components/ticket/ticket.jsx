import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Ticket = ({ ticketInfo }) => {
  const { segments, price, carrier } = ticketInfo;
  const burgerUrl = `http://pics.avs.io/110/36/${carrier}.png`;
  const viewInfo = (travelWay) => {
    const { date, destination, origin, duration, stops } = travelWay;
    const location = `${origin} - ${destination}`;
    const transferCount = stops.length;
    let transferString = `${transferCount} ПЕРЕСАДОК`;
    if (transferCount % 2 === 0 || transferCount % 3 === 0) {
      transferString = `${transferCount} ПЕРЕСАДКИ`;
    }
    if (transferCount === 0) {
      transferString = 'БЕЗ ПЕРЕСАДОК';
    }
    if (transferCount === 1) {
      transferString = '1 ПЕРЕСАДКА';
    }
    const formatDateForComponents = (durationTime) => {
      const durationHours = Math.floor(durationTime / 60);
      const durationMin = durationHours % 60;
      const travelTime = `${durationHours} ч ${durationMin} мин`;
      const hour = date.substring(11, 13);
      const min = date.substring(14, 16);
      const transferCities = stops.join(', ');
      const departureTime = `${hour}:${min}`;
      const hourLandingTime =
        Number(hour) + durationHours >= 24 ? (Number(hour) + durationHours) % 24 : Number(hour) + durationHours;
      const minLandingtime =
        Number(min) + durationMin >= 60 ? (Number(min) + durationMin) % 60 : Number(min) + durationMin;
      const landingTime = `${hourLandingTime}:${minLandingtime}`;
      return {
        travelTime,
        transferCities,
        departureTime,
        landingTime,
      };
    };

    const { travelTime, transferCities, departureTime, landingTime } = formatDateForComponents(duration);

    const stringWithInfoStyle = {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginBottom: 10,
    };
    return (
      <section style={stringWithInfoStyle}>
        <span className="card__header">{location}</span>
        <span className="card__header">В пути</span>
        <span className="card__header">{transferString}</span>
        <span className="card__info">{`${departureTime} - ${landingTime}`}</span>
        <span className="card__info">{travelTime}</span>
        <span className="card__info">{transferCities}</span>
      </section>
    );
  };
  return (
    <div className="card">
      <div className="card__price">{`${price.toLocaleString()} Р`}</div>
      <img className="card__burger" src={burgerUrl} alt="aviacompany brand" />
      {viewInfo(segments[0])}
      {viewInfo(segments[1])}
    </div>
  );
};

Ticket.defaultProps = {
  ticketInfo: {
    segments: [],
    price: '0',
    carrier: ' ',
  },
};

Ticket.propTypes = {
  ticketInfo: PropTypes.objectOf(PropTypes.any),
};
export default Ticket;
