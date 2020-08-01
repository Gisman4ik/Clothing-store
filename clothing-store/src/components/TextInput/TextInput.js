import React from 'react';
import { StyledTextInput } from './StyledTextInput/StyledTextInput';

var classNames = require('classnames');

export function TextInput ({size = 'medium',className,...props}) {
    return (
        <StyledTextInput
            className = {classNames(
                'text-input',
                className,
                `text-input_size_${size}`
            )}
            {...props}
        >   
        </StyledTextInput>
    )
}