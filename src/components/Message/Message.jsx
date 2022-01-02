import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = (props) => {
    if (props.text === '') {
        return null;
    }
    return <p className="Message">{props.text}</p>;
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Message;
