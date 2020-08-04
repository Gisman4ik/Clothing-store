import React from 'react';
import './styledTextareaInput.css';

export function StyledTextareaInput ({className, ...props}) {
    return (
        <input className={className} placeholder={props.children}/>
    )
}