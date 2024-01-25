
import React from 'react'


const ShopListItem = ({text, className}) => {
  return (
    <>
     <li className={`font-dm text-sm text-textColor py-[20px] ${className}`}>{text}</li>
    </>
  )
}

export default ShopListItem