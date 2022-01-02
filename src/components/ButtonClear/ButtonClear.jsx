import React from 'react';
import PropTypes from 'prop-types';
import './ButtonClear.css';

const ButtonClear = (props) => {
    if (props.query === '') {
        return null;
    }

    return (
        <button className="ButtonClear" onClick={props.clearQuery}>
            <span className="ButtonClear__left-half"></span>
            <span className="ButtonClear__right-half"></span>
        </button>
    );
};

ButtonClear.propTypes = {
    query: PropTypes.string.isRequired,
    clearQuery: PropTypes.func.isRequired,
};

export default ButtonClear;
