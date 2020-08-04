import React from 'react';
import { StyledButton } from './StyledButton/StyledButton';
import {Icon} from '../Icon/Icon'
var classNames = require('classnames');

export function Button ({className, color = 'white', size = 'content', appearence = 'default', rightIcon, leftIcon, ...props}) {
    console.log(rightIcon, 'lel');
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
            {leftIcon && (<Icon src={leftIcon}></Icon>)}
            {props.children}
            {rightIcon && (<Icon src={rightIcon}></Icon>)}
        </StyledButton>
    )
}