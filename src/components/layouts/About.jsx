import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Image from '../Image'
import about2 from '../../assets/about2.png'
import about from '../../assets/about.png'
import Flex from '../Flex'
import Badge from '../Badge'
import Paragraph from '../Paragraph'
const About = () => {
  return (
    <>
    <section className='py-[80px]'>
      <Container>
          <Heading style='text-[49px]' text='About' as='h2'/>
          <div className='py-[100px]'>
            <Flex style='justify-between'>
            <div className='w-[45%] relative'>
              <Image src={about2}/>
              <Badge className='py-5 px-[50px] text-center w-[50%] absolute bottom-[40px] left-[25%]' text='Our Brands'/>
            </div>
            <div className='w-[45%] relative'>
              <Image src={about}/>
              <Badge className='py-5 px-[50px] text-center w-[50%] absolute bottom-[40px] left-[25%]' text='Our Stores'/>
            </div>
            </Flex>
            
            <Paragraph style='text-[30px] py-[100px] leading-10' text='Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'/>

            <div>
              <Flex style='justify-between'>
                <div className='w-[30%]'>
                  <Heading text='Our Vision' as='h2'/>
                  <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className='w-[30%]'>
                  <Heading text='Our Story' as='h2'/>
                  <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className='w-[30%]'>
                  <Heading text='Our Brands' as='h2'/>
                  <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
              </Flex>
            </div>
          </div>
      </Container>
    </section>
    </>
  )
}

export default About