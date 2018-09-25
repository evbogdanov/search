import React from 'react';
import './Message.css';

const Message = (props) => {
  if (!props.text) {
    return null;
  }

  return (
    <p className="Message">{props.text}</p>
  );
};

export default Message;
