import React from 'react'
import Label from '../Label'
import InputFiled from '../InputFiled'
import Heading from '../Heading'
import Breadcrumb from '../Breadcrumb'
import Container from '../Container'
import Button from '../Button'


const Contact = () => {

  let bread = window.location.pathname.replace("/", "")
  return (
  <>
  <section className='py-[80px]'>
    <Container>
      <Heading style='text-[49px]' text='Contact' as='h2'/>
      <Breadcrumb text={bread}/>
      <div className='pt-[125px]'>
        <Heading style='text-[40px]' text='Fill up a Form' as='h2'/>
        <div className='w-1/2 pt-[42px]'>
        <Label labelName='Name'/>
        <InputFiled inType='text' inPh='Your name here'/>
        </div>
        <div className='w-1/2 pt-[23px]'>
        <Label labelName='Email'/>
        <InputFiled inType='email' inPh='Your email here'/>
        </div>
        <div className='w-1/2 pt-[23px]'>
        <Label labelName='Name'/>
        <InputFiled inType='text' inPh='Your message here' BclassName='pt-[45px]'/>
        </div>
        <div className='pt-[30px]'>
            <Button text='Post' className='bg-black text-white px-[60px]'/>
        </div>
      </div>
      <div className='pt-[120px]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463488.0340324524!2d89.0259925554375!3d24.82966452268236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5161abec81e5%3A0x6e662e81367a4738!2z4Kas4KaX4KeB4Kec4Ka-IOCmnOCnh-CmsuCmvg!5e0!3m2!1sbn!2sbd!4v1705984692434!5m2!1sbn!2sbd" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Container>
  </section>
   
  </>
)}

export default Contact