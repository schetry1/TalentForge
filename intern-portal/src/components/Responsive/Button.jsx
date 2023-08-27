import React from 'react'
import './button.css'


const STYLES=[
    'btn--primary',
    'btn--outline'
]
const SIZE=[
    'btn--medium',
    'btn--large'
]

const Button = ({children,
    type,
    onClick,
    buttonStyle,
    buttonSize}) => {
const checkButtonStyle= STYLES.includes(buttonStyle)? buttonStyle: STYLES[0] 
const checkButtonSize = SIZE.includes(buttonSize)? buttonSize: SIZE[0]
    return (
        <button className={`btn $(checkButtonSize) $(checkButtonStyle)`} onClick={onClick} type={type}>
           {children}
        </button>
    )
}

export default Button;

