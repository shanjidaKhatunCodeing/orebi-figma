import React from 'react'
import { Link } from 'react-router-dom'

const CategoryMenuItem = ({to, className, text}) => {
  return (
    <>
    <Link to={to}>
        <li className={`text-sm font-dm text-white py-[16px] px-[20px] ${className}`}>{text}
        <div className='border-b border-slate-100 py-[3px]'></div>
        </li>
        
    </Link>
    
    </>
  )
}

export default CategoryMenuItem