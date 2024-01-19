import React from 'react'
import Label from '../Label'
import InputFiled from '../InputFiled'
import Heading from '../Heading'
import Breadcrumb from '../Breadcrumb'


const Contact = () => {

  let bread = window.location.pathname.replace("/", "")
  return (
  <>
   <Heading style='text-[49px]' text='Contact' as='h2'/>
   <Breadcrumb text={bread}/>
   <Label labelName='name'/>
   <InputFiled inType='email' inPh='Enter your Email'/>
  </>
)}

export default Contact