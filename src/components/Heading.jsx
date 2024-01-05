import React from 'react'

const Heading = (props) => {
  return (
    <props.as className={`font-dm font-bold text-xl text-headingColor ${props.style}`}>{props.text}</props.as>
  )
}

export default Heading