import React from 'react'
import Badge from './Badge'
import Flex from './Flex'
import Price from './Price'
import Paragraph from './Paragraph'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Compareicon from './Compareicon'
import { useDispatch } from 'react-redux'
import { increment } from '../slices/counterSlice'


const Product = ({src, alt, text, pricetext, badgeText}) => {

    const dispatch = useDispatch()
  return (
    <div className='relative group'>
        <img className='w-[100%]' src={src} alt={alt} />
        <Badge className='absolute top-4 left-5' text={badgeText}/>
        <Flex style='justify-between'>
            <p className='text-xl text-dm font-bold'>{text}</p>
            <p className='text-dm text-sm text-textColor font-regular'>{pricetext}</p>
        </Flex>
        <div className='w-full bg-white pt-4  absolute bottom-6 invisible group-hover:visible'>
            <div>
            <Flex style=' justify-end gap-x-5'>
                <Paragraph style='text-sm' text='Add to Wish List'/>
                <FaHeart/>
            </Flex>
            </div>
            <div className='py-2.5'>
            <Flex style=' justify-end gap-x-5'>
                <Paragraph style='text-sm' text='Compare'/>
                <Compareicon/>
            </Flex>
            </div>
            <div className='pb-16 text-end'>
                <button onClick={()=> dispatch(increment())}>
                    <Flex style=' justify-end gap-x-5'>
                        <Paragraph style='text-base text-black font-bold' text='Add to Cart'/>
                        <FaShoppingCart/>
                    </Flex>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Product