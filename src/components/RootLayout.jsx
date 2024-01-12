import React from 'react'
import Navbar from './layouts/Navbar'
import Category from './layouts/Category'
import { Outlet } from 'react-router-dom'
import Fotter from './layouts/Fotter'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default RootLayout