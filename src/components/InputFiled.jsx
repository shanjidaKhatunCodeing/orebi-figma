import React from 'react'

const InputFiled = ({inName, inPh, inType, invalue, className, BclassName}) => {
  return (
   <>
    <input className={`text-dm text-sm text-textColor block pt-[10px] w-[80%] outline-none ${className}`} type={inType} placeholder={inPh} name={inName} value={invalue} />
    <div className={`border-b-2 border-boderColor outline-none pt-[20px] ${BclassName}`}></div>
   </>
  )
}

export default InputFiled