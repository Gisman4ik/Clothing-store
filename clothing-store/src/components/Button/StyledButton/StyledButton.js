import React from 'react';
import './styledbutton.css';

export function StyledButton ({className,...props}) {
    return (
        <button className = {className}>{props.children}</button>
    )
} 