import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Breadcrumb from '../Breadcrumb'
import Flex from '../Flex'
// import { HiBars3 } from "react-icons/hi2"
// import { HiViewGrid } from "react-icons/hi"
import Product from '../Product'
import product7 from '../../assets/product7.png'
import product10 from '../../assets/product10.png'
import product11 from '../../assets/product11.png'
import product1 from '../../assets/product.png'
import ShopbyCategory from '../ShopbyCategory'
import ShopbyColor from '../ShopbyColor'
import ShopbyBrand from '../ShopbyBrand'
import ShopbyPrice from '../ShopbyPrice'





const Shop = () => {

  let bread = window.location.pathname.replace("/", "")

  return (
   <>
    <section className='py-[80px]'>
    <Container>
        <Heading text='Products' as='h2'/>
        <Breadcrumb text={bread}/>
                
            {/* <div className='w-1/4'>
                        <Flex style='gap-x-5'>
                           <HiViewGrid/>
                           <HiBars3/>
                        </Flex>
                    </div> */}
       <Flex style='gap-x-5'>
        <div className='w-1/4 pt-[50px]'>
            <ShopbyCategory/>
            <ShopbyColor/>
            <ShopbyBrand/>
            <ShopbyPrice/>
        </div>
        <div className='w-[75%]'>
        <div className='py-[100px]'>
            <Flex style='justify-between gap-x-5'>
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
        </div>
       </Flex>
    </Container>
   </section>
   </>
  )
}

export default Shop