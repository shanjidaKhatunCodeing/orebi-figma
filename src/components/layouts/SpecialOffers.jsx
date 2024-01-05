import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import Heading from '../Heading'
import product from '../../assets/product9.png'
import product2 from '../../assets/product10.png'
import product3 from '../../assets/product11.png'
import product4 from '../../assets/product12.png'

const SpecialOffers = () => {
  return (
    <section className='py-[80px]'>
        <Container>
            <Heading style='pb-20 text-[39px]' text='Special Offers' as='h2'/>
            <Flex style='justify-between gap-x-10'>
                <div className='w-1/4'>
                    <Product src={product} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product2} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product3} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product4} text='Basic Crew Neck Tee' pricetext='$44.00'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default SpecialOffers