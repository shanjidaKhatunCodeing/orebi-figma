import React from 'react'

const List = ({href, text, style}) => {
  return (
    <li>
        <a className={`font-dm text-sm text-listColor font-normal list-none hover:text-headingColor hover:font-bold ${style}`} href={href}>{text}</a>
    </li>
  )
}

export default List