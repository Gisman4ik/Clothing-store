import React from 'react';
import { StyledButton } from './StyledButton/StyledButton';
var classNames = require('classnames');

export function Button ({className, color = 'white', size = 'medium', appearence = 'default', ...props}) {
    return (
        <StyledButton
            className = {classNames(
                'btn',
                className,
                `button_color_${color}`,
                `button_size_${size}`,
                `button_appereance_${appearence}`
            )}
            {...props}
        >
        </StyledButton>
    )
}