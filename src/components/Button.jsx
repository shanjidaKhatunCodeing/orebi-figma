import React from 'react'

const Button = ({href, className, text}) => {
  return (
    <a href={href}>
        <button className={`font-dm text-sm font-bold text-center ${className}`}>{text}</button>
    </a>
  )
}

export default Button