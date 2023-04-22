import React from 'react';
import './inputext.css';

const InputText = ({id, placeholder, eventText}) => {
    return <input type="text" onChange={eventText} id={id} placeholder={placeholder}/>
}
export default InputText;
