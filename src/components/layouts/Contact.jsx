import React from 'react'
import Label from '../Label'
import InputFiled from '../InputFiled'
import Navbar from './Navbar'

const Contact = () => {
  return (
  <>
    <Navbar/>
    <div className='text-3xl text-amber-950'>This is contact page</div>
   <Label labelName='name'/>
   <InputFiled inType='email' inPh='Enter your Email'/>
  </>
)}

export default Contact