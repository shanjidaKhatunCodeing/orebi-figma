import React from 'react'

const Label = ({className, labelName}) => {
  return (
    <label className={`text-dm font-bold text-base text-headingColor ${className}`}>{labelName}</label>
  )
}

export default Label