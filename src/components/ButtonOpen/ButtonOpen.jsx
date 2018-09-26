import React from 'react';
import PropTypes from 'prop-types';
import './ButtonOpen.css';


const ButtonOpen = (props) => {
  return <button className="ButtonOpen"
                 onClick={props.openUrl}></button>;
};

ButtonOpen.propTypes = {
  openUrl: PropTypes.func.isRequired,
};


export default ButtonOpen;
