import React from 'react'
import Navbar from './Navbar'
import Category from './Category'

const Journal = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <div className='text-3xl text-lime-700'>This is Journal page</div>
    </>
  )
}

export default Journal