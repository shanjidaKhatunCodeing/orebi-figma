import React from 'react'
import { HiOutlinePlusSmall } from "react-icons/hi2";
import ShopListItem from './ShopListItem';
import Flex from './Flex';
import { Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa"
import { useRef } from 'react'
import Heading from './Heading';
import Paragraph from './Paragraph';

const ShopbyCategory = () => {

    const iconRef = useRef(null);
    const handleClickIcon = () => {
      iconRef.current.classList.toggle("rotate-180");
    }

    const iconRef2 = useRef(null);
    const handleClickIcon2 = () => {
        if (iconRef2.current.style.display == "block") {
            iconRef2.current.style.display = "none"
          }
          else{
            iconRef2.current.style.display = "block"
          }
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
    <div onClick={handleCategory}>
        <Flex style='items-center justify-between'>
            <Heading text='Shop by Category' as='h2'/> 
            <Link ref={iconRef} onClick={() => {handleClickIcon()}}>
                <FaCaretDown/>
            </Link>
        </Flex>
          </div>

      <div ref={categoryRef} className='w-full hidden pl-2' >
       <ul>
        <Flex style='items-center justify-between'> 
            <ShopListItem text='Category 1'/>
            {/* <Link onClick={() => {handleClickIcon2()}}>
                <HiOutlinePlusSmall/>
            </Link> */}
            <HiOutlinePlusSmall/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center justify-between'> 
            <ShopListItem text='Category 2'/>
            <HiOutlinePlusSmall/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center justify-between'> 
            <ShopListItem text='Category 3'/>
            <HiOutlinePlusSmall/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center justify-between'> 
            <ShopListItem text='Category 4'/>
            <HiOutlinePlusSmall/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>

        <Flex style='items-center justify-between'> 
            <ShopListItem text='Category 5'/>
            <HiOutlinePlusSmall/>
        </Flex>
        <div className='border-b-2 border-boderColor'></div>
       </ul>
      </div>

    {/* <div className='relative'>
      <div className='hidden absolute top-[-250px]' ref={iconRef2}>
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur."/>
     </div>
    </div> */}
    </>
  )
}

export default ShopbyCategory