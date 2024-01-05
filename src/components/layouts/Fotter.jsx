import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5";
import Paragraph from '../Paragraph'

const Fotter = () => {
  return (
    <section className='py-14 bg-fotterColor'>
        <Container>
            <Flex style='justify-end'>
                <div className='w-[20%]'>
                    <ul>
                        <List style='pb-14 text-xl' text='MENU'/>
                        <List text='Home' style='pb-5'/>
                        <List text='About' style='pb-5'/>
                        <List text='Shop' style='pb-5'/>
                        <List text='Contact' style='pb-5'/>
                        <List text='Journal' style='pb-5'/>
                    </ul>
                </div>
                <div className='w-[20%]'>
                    <ul>
                        <List style='pb-14 text-xl' text='SHOP'/>
                        <List text='Category 1' style='pb-5'/>
                        <List text='Category 2' style='pb-5'/>
                        <List text='Category 3' style='pb-5'/>
                        <List text='Category 4' style='pb-5'/>
                        <List text='Category 5' style='pb-5'/>
                    </ul>
                </div>
                <div className='w-[20%]'>
                    <ul>
                        <List style='pb-14 text-xl' text='HELP'/>
                        <List text='Privacy Policy' style='pb-5'/>
                        <List text='Terms & Conditions' style='pb-5'/>
                        <List text='Special E-shop' style='pb-5'/>
                        <List text='Shipping' style='pb-5'/>
                        <List text='Secure Payments' style='pb-5'/>
                    </ul>
                </div>
                
                <div className='w-[20%]'>
                    <ul>
                        <List style='pb-14 text-xl' text='(052) 611-5711company@domain.com'/>
                        <List text='575 Crescent Ave. Quakertown, PA 18951' style='pb-5 text-sm'/>
                    </ul>
                </div>
                <div className='w-[20%] text-center'>
                    <Image style='inline' src={logo}/>
                </div>
            </Flex>
            <Flex style='pt-14'>
                <div className='w-[20%]'>
                    <Flex style='gap-x-2.5'>
                    <a href="#" target='_blank'>
                    <FaFacebookF />
                    </a>
                    <a href="#" target='_blank'>
                    <FaLinkedinIn />
                    </a>
                    <a href="#" target='_blank'>
                    <IoLogoInstagram />
                    </a>
                    </Flex>
                </div>
                <div className='w-[80%]'>
                    <Paragraph style='text-sm text-end' text='2020 Orebi Minimal eCommerce Figma Template by Adveits'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Fotter