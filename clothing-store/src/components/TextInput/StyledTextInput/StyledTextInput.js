import React from 'react';
import './styledTextInput.css';

export function StyledTextInput ({className, ...props}) {
    return (
        <input className={className} placeholder={props.children}/>
    )
}