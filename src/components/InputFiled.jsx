import React from 'react'

const InputFiled = ({inName, inPh, inType, invalue, className}) => {
  return (
    <input className={`text-dm text-sm text-textColor border-b-2 border-boderColor outline-none block pt-[5px] pl-[20px] w-[80%]  ${className}`} type={inType} placeholder={inPh} name={inName} value={invalue} />
  )
}

export default InputFiled