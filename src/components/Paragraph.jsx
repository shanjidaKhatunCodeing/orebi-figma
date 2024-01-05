import React from 'react'

const Paragraph = ({text, style}) => {
  return (
    <p className={`text-dm text-base text-textColor font-regular ${style}`}>{text}</p>
  )
}

export default Paragraph