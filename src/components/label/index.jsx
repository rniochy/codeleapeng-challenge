import React from 'react';
import './label.css';

const Label = ({HTMLfor, content}) => {
    return <label htmlFor={HTMLfor}> <strong>{content}</strong></label>
}

export default Label;
