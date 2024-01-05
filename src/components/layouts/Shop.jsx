import React from 'react'
import Navbar from './Navbar'
import Category from './Category'

const Shop = () => {
  return (
   <>
    <Navbar/>
    <Category/>
    <div className='text-3xl text-red-500'>This is shop page</div>
   </>
  )
}

export default Shop