import React from 'react';
import { StyledSearchInput } from './StyledSearchInput/StyledSearchInput';

var classNames = require('classnames');

export function SearchInput ({size = 'medium',className,...props}) {
    return (
        <StyledSearchInput
            className = {classNames(
                'search-input',
                className,
                `search-input_size_${size}`
            )}
            {...props}
        >
            {props.children}   
        </StyledSearchInput>
    )
}