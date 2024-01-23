import React from 'react'
import Heading from '../Heading'
import Breadcrumb from '../Breadcrumb'
import Paragraph from '../Paragraph'
import Container from '../Container'
import Flex from '../Flex'
import Label from '../Label'
import InputFiled from '../InputFiled'
import Button from '../Button'

const SingIn = () => {

  let bread = window.location.pathname.replace("/", "")
  

  return (
   <>
    <section className='py-[80px]'>
     <Container>
      <Heading style='text-[49px]' text='Singin' as='h2'/>
      <Breadcrumb text={bread}/>
      <Paragraph style='pt-[120px] pb-[62px] pr-[600px]' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
      <div className='border-b-2 border-boderColor'></div>

      <div className='pt-[57px] pb-[30px]'>
          <Heading style='text-[40px] pb-[40px]' text='Returning Customer' as='h2'/>
          <Flex style='gap-x-10'>
            <div className='w-[30%]'>
              <Label labelName='Email address'/>
              <InputFiled inType='text' inPh='company@domain.com'/>
            </div>
            <div className='w-[30%]'>
              <Label labelName='Password'/>
              <InputFiled inType='password' inPh='******'/>
            </div>
          </Flex>
      </div>
      <Button className='px-[60px] border-2 border-black' text='Sing In'/>
      <div className='pt-[70px] border-b-2 border-boderColor'></div>

      <div className='pt-[60px]'>
        <Heading style='text-[40px]' text='New Customer' as='h2'/>
        <Paragraph style='pr-[550px] pt-[40px] pb-[50px]' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
        <Button className='px-[60px] bg-black text-white' text='Continue'/>

      </div>
     </Container>
    </section>
   </>
  )
}

export default SingIn