import React from 'react';
import './Message.css';

const Message = (props) => {
  return (
    <p className="Message">{props.text}</p>
  );
};

export default Message;
