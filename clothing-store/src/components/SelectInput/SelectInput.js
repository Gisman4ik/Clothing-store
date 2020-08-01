import React from 'react';
import { StyledSelectInput } from './StyledSelectInput/StyledSelectInput';

var classNames = require('classnames');

export function SelectInput ({size = 'medium',className,...props}) {
    return (
        <StyledSelectInput
            className = {classNames(
                'select-input',
                className,
                `select-input_size_${size}`
            )}
            {...props}
        >   
        </StyledSelectInput>
    )
}