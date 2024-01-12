import React from 'react'
import { Link } from 'react-router-dom'

const List = ({to, text, style}) => {
  return (
    <li>
        <Link className={`font-dm text-sm text-listColor font-normal list-none hover:text-headingColor hover:font-bold ${style}`} to={to}>{text}</Link>
    </li>
  )
}

export default List