import React from 'react'

const Container = ({children, style}) => {
  return (
    <div className={`max-w-container mx-auto ${style}`}>{children}</div>
  )
}

export default Container