import React from 'react';
import './styledSearchInput.css';

export function StyledSearchInput ({className, ...props}) {
    return (
        <div className="search-container">
            <input type="search" className={className} placeholder={props.children}/>
            <span className="search-icon"></span>
        </div>
    )
}