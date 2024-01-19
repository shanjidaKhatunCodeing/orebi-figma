import React from 'react'

const Breadcrumb = ({className, text}) => {
  return (
    <div className={`text-sm text-dm text-textColor font-regular first-letter:uppercase pt-[12px] ${className}`}>{text}</div>
  )
}

export default Breadcrumb