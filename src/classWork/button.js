import React, { Component } from 'react';

const Button = ({ action, style, children }) => {
    return (
        <button
            onClick = {action}
            style = {style}
        >
            {children}
        </button>
    ) 
}

Button.defaultProps = {
        style: {
            background: 'black',
            color: 'white',
            padding: '10px'
        },
        action: () => {console.log('this is button')},
        children: 'Button'
}

export default Button;