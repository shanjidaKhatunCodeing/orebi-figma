import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Product from '../Product'
import pro from '../../assets/product5.png'
import pro2 from '../../assets/product6.png'
import pro3 from '../../assets/product7.png'
import pro4 from '../../assets/product8.png'

const OurBestsellers = () => {
  return (
    <section className='py-[80px]'>
        <Container>
            <Heading style='pb-20 text-[39px]' text='Our Bestsellers' as='h2'/>
            <Flex style='justify-between gap-x-10'>
                <div className='w-1/4'>
                    <Product src={pro} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
                <div className='w-1/4'>
                    <Product src={pro2} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
                <div className='w-1/4'>
                    <Product src={pro3} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
                <div className='w-1/4'>
                    <Product src={pro4} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default OurBestsellers