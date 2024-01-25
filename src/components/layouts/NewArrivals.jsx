import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import prduct1 from '../../assets/product.png'
import prduct2 from '../../assets/product2.png'
import prduct3 from '../../assets/product3.png'
import prduct4 from '../../assets/product4.png'

const NewArrivals = () => {
  return (
   <section className='py-[50px]'>
    <Container>
        <Heading style='pb-20 text-[39px]' text='New Arrivals' as='h2'/>

        <Flex style='justify-between gap-x-10'>
            <div className='w-1/4'>
                <Product src={prduct1} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
            </div>
            
            <div className='w-1/4 pb-20'>
                <Product src={prduct2} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
            </div>
            
            <div className='w-1/4 pb-20'>
                <Product src={prduct3} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
            </div>
           
            <div className='w-1/4 pb-20'>
                <Product src={prduct4} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
            </div>
        </Flex>
    </Container>
   </section>
  )
}

export default NewArrivals