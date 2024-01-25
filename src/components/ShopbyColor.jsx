import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa"
import { useRef } from 'react'
import ShopListItem from './ShopListItem'
import { GiPlainCircle } from "react-icons/gi";

const ShopbyColor = () => {

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
            <Heading text='Shop by Colors' as='h2'/> 
            <Link ref={iconRef} onClick={() => {handleClickIcon()}}>
                <FaCaretDown/>
            </Link>
         </Flex>
    </div>   

    <div className='w-full pl-2 hidden' ref={categoryRef}>
      <ul>
        <Flex style='items-center gap-x-1'> 
            <GiPlainCircle className='text-[10px]'/>
            <ShopListItem text='Colors 1'/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center gap-x-1'> 
            <GiPlainCircle className='text-red-500 text-[10px]'/>
            <ShopListItem text='Colors 2'/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center gap-x-1'> 
            <GiPlainCircle className='text-bule-500 text-[10px]'/>
            <ShopListItem text='Colors 3'/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center gap-x-1'> 
            <GiPlainCircle className='text-green-500 text-[10px]'/>
            <ShopListItem text='Colors 4'/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center gap-x-1'> 
            <GiPlainCircle className='text-teal-500 text-[10px]'/>
            <ShopListItem text='Colors 5'/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>
      </ul>
    </div>
    </>
    

    
  )
}

export default ShopbyColor