import React from 'react'

const Button = ({ styleClass, children }) => {
    return (
        <button className={styleClass} type='button'>{children}</button>
    )
}

export default Button;