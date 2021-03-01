import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = ({select,checked}) => <input type="checkbox" checked={checked} onChange={select} className='content__transfer-filter-checkbox'/>

Checkbox.defaultProps = {
    select:() => {},
    checked:'true'
}

Checkbox.propTypes = {
    select:PropTypes.func,
    checked:PropTypes.bool
}

export default Checkbox