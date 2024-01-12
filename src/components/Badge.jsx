import React from 'react'


const Badge = ({text, className}) => {
  return (
    <div className={`py-2.5 px-7 bg-black text-sm text-white font-bold text-dm  ${className}`}>
        {text}
    </div>
  )
}

export default Badge
//text-sm text-white font-bold text-dm absolute top-[50px] left-0