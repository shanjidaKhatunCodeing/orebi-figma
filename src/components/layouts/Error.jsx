import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import InputFiled from '../InputFiled'
import { FaSearch } from "react-icons/fa"
import Button from '../Button'

const Error = () => {
  return (
    <section className='py-[140px]'>
        <Container>
            <Heading style='text-[200px]' text='404' as='h2'/>

            <Paragraph style='pt-[100px] pb-[50px] pr-[550px]' text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>

            <div className='relative'>
                <Flex style='items-center'>
                    <InputFiled className='w-[550px] h-[55px] border-2' inPh='Type to search'/>
                    <FaSearch className='absolute top-[] left-[520px]'/>
                </Flex>
                <Button className='mt-[40px] bg-black text-white' text='Back to Home' to='/'/>
            </div>
        </Container>
    </section>
  )
}

export default Error
