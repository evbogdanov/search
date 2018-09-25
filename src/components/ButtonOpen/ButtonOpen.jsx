import React from 'react';
import './ButtonOpen.css';

const ButtonOpen = (props) => {
  return <button className="ButtonOpen"
                 onClick={props.openUrl}></button>;
};

export default ButtonOpen;
