import React from 'react';
import './inputext.css';

const InputText = ({id, placeholder, eventText, classToSize}) => {
    return <input className={classToSize} type="area" onChange={eventText} id={id} placeholder={placeholder}/>
}
export default InputText;
