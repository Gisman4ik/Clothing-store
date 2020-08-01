import React from 'react';
import { StyledTextareaInput } from './StyledTextareaInput/StyledTextareaInput';

var classNames = require('classnames');

export function TextareaInput ({size = 'medium',className,...props}) {
    return (
        <StyledTextareaInput
            className = {classNames(
                'textarea-input',
                className,
                `textarea-input_size_${size}`
            )}
            {...props}
        >   
        </StyledTextareaInput>
    )
}