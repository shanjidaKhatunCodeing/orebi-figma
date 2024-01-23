import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Breadcrumb from '../Breadcrumb'
import Flex from '../Flex'
import { HiBars3 } from "react-icons/hi2"
import { HiViewGrid } from "react-icons/hi"
import Product from '../Product'
import product7 from '../../assets/product7.png'
import product10 from '../../assets/product10.png'
import product11 from '../../assets/product11.png'
import product1 from '../../assets/product.png'


const Products = () => {

    let bread = window.location.pathname.replace("/", "")

  return (
   <section className='py-[80px]'>
    <Container>
        <Heading text='Products' as='h2'/>
        <Breadcrumb text={bread}/>
        <div className='pt-[130px] pb-[60px]'>
            <Flex>
                <div className='w-1/4'>
                    <Heading text='Shop by Category' as='h2'/>
                </div>
            <div className='w-1/4'>
                        <Flex style='gap-x-5'>
                           <HiViewGrid/>
                           <HiBars3/>
                        </Flex>
                    </div>
            </Flex>
        </div>
        <div>
            <Flex style='justify-between gap-x-5'>
                <div className='w-1/4'></div>
                <div className='w-1/4'>
                    <Product src={product7} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product10} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='-10%'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product11} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
                </div>
            </Flex>
        </div>
        <div className='pt-[50px]'>
            <Flex style='justify-between gap-x-5'>
                <div className='w-1/4'></div>
                <div className='w-1/4'>
                    <Product src={product1} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='-15%'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product7} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product11} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='-10%'/>
                </div>
            </Flex>
        </div>
        <div className='pt-[50px]'>
            <Flex style='justify-between gap-x-5'>
                <div className='w-1/4'></div>
                <div className='w-1/4'>
                    <Product src={product7} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product1} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='-10%'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product10} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
                </div>
            </Flex>
        </div>
        <div className='pt-[50px]'>
            <Flex style='justify-between gap-x-5'>
                <div className='w-1/4'></div>
                <div className='w-1/4'>
                    <Product src={product10} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='New'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product7} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='-10%'/>
                </div>
                <div className='w-1/4'>
                    <Product src={product1} text='Basic Crew Neck Tee' pricetext='$44.00' badgeText='-20%'/>
                </div>
            </Flex>
        </div>
    </Container>
   </section>
  )
}

export default Products