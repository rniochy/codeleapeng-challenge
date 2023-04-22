import React from 'react';
import './label.css';

const Label = ({HTMLfor, content}) => {
    return <label htmlFor={HTMLfor}>{content}</label>
}

export default Label;
