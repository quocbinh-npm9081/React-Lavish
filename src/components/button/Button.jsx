import React from 'react'
import './button.css'


const Button = ({children,
                type, 
                onClick,
                buttonSize,
                buttonStyle,
                buttonColor
                             }) => {

    const STYLES = ['btn--primary, btn--outline'];
    const SIZE = ['btn--medium', 'btn--large', 'btn--moblie', 'btn--wide'];
    const COLOR = ['primary', 'blue', 'red', 'green'];
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[null];



    return (    
        <div>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
                    onClick={onClick}
                    type={type}
            
            >
                {children}
            </button>
        </div>
    )
}

export default Button
