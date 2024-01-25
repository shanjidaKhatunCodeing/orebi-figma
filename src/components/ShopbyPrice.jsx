import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa"
import { useRef } from 'react'
import ShopListItem from './ShopListItem'

const ShopbyPrice = () => {

    const iconRef = useRef(null);
    const handleClickIcon = () => {
      iconRef.current.classList.toggle("rotate-180");
    }

    let categoryRef = useRef(0);

    let handleCategory = () => {
  
      if (categoryRef.current.style.display == "block") {
        categoryRef.current.style.display = "none"
      }
      else{
        categoryRef.current.style.display = "block"
      }
    };
  return (
    <>
    <div onClick={handleCategory} className='pt-[50px]'>
        <Flex style='items-center justify-between'>
            <Heading text='Shop by Price' as='h2'/> 
            <Link ref={iconRef} onClick={() => {handleClickIcon()}}>
                <FaCaretDown/>
            </Link>
         </Flex>
    </div>   

    <div className='w-full pl-2 hidden' ref={categoryRef}>
      <ul>
        <ShopListItem text='$0.00 - $9.99'/>
       <div className='border-b-2 border-boderColor'></div>

            <ShopListItem text='$30.00 - $39.99'/>
        <div className='border-b-2 border-boderColor'></div>

            <ShopListItem text='$30.00 - $39.99'/>
        <div className='border-b-2 border-boderColor'></div>

            <ShopListItem text='$0.00 - $9.99'/>
        <div className='border-b-2 border-boderColor'></div>

            <ShopListItem text='$30.00 - $39.99'/>
        <div className='border-b-2 border-boderColor'></div>
      </ul>
    </div>
    </>
    
  )
}

export default ShopbyPrice