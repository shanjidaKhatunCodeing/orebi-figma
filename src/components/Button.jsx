import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, className, text}) => {
  return (
    <Link to={to}>
        <button className={`font-dm text-sm font-bold text-center py-[16px] px-[30px] ${className}`}>{text}</button>
    </Link>
  )
}

export default Button