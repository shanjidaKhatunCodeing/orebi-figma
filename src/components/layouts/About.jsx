import React from 'react'
import Navbar from './Navbar'
import Category from './Category'

const About = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <div className='text-3xl text-orange-800'>This is About page</div>
    </>
  )
}

export default About