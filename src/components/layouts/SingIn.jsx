import React from 'react'
import Heading from '../Heading'
import Breadcrumb from '../Breadcrumb'

const SingIn = () => {

  let bread = window.location.pathname.replace("/", "")
  

  return (
   <>
   <Heading style='text-[49px]' text='Singin' as='h2'/>
   <Breadcrumb text={bread}/>
   </>
  )
}

export default SingIn