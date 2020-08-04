import React from 'react';
import './styledSelectInput.css';

export function StyledSelectInput ({className, ...props}) {
    return (
        <select className={className} required>
            <option value="" hidden>{props.children}</option>
            <option value="1">48</option>
            <option value="2">50</option>
            <option value="3">52</option>
            <option value="4">54</option>
            <option value="5">56</option>
            <option value="3">58</option>
            <option value="4">60</option>
        </select>
    )
}