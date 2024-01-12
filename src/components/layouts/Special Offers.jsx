import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import prduct9 from '../../assets/product9.png'
import prduct10 from '../../assets/product10.png'
import prduct11 from '../../assets/product11.png'
import prduct12 from '../../assets/product12.png'

const SpecialOffers = () => {
  return (
    <section className='py-[50px]'>
    <Container>
        <Heading style='pb-20 text-[39px]' text='Special Offers' as='h2'/>

        <Flex style='justify-between gap-x-10'>
            <div className='w-1/4'>
                <Product src={prduct9} text='Basic Crew Neck Tee' pricetext='$44.00'/>
            </div>
            
            <div className='w-1/4 pb-20'>
                <Product src={prduct10} text='Basic Crew Neck Tee' pricetext='$44.00'/>
            </div>
            
            <div className='w-1/4 pb-20'>
                <Product src={prduct11} text='Basic Crew Neck Tee' pricetext='$44.00'/>
            </div>
           
            <div className='w-1/4 pb-20'>
                <Product src={prduct12} text='Basic Crew Neck Tee' pricetext='$44.00'/>
            </div>
        </Flex>
    </Container>
   </section>
  )
}

export default SpecialOffers