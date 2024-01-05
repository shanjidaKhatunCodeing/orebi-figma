import React from 'react'

const CategoryMenuItem = ({href, className, text}) => {
  return (
    <>
    <a href={href}>
        <li className={`text-sm font-dm text-white py-[16px] px-[20px] ${className}`}>{text}
        <div className='border-b border-slate-100 py-[3px]'></div>
        </li>
        
    </a>
    
    </>
  )
}

export default CategoryMenuItem