import React from 'react';
import "./button.css";

const Button = ({eventClick, ableButton, name, classButton}) => {
    return <button className={classButton} onClick={eventClick} disabled={ableButton}>{name}</button>
}
export default Button;