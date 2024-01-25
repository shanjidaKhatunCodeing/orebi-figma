import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'
import Paragraph from '../Paragraph'
import { FaUser, FaCaretDown, FaShoppingCart, FaSearch } from "react-icons/fa";
import CategoryMenuItem from '../CategoryMenuItem'
import { useRef } from 'react'
import Button from '../Button'
import { useSelector } from 'react-redux'
import Image from '../Image'
import img from '../../assets/img.png'
import Heading from '../Heading'
import { ImCross } from "react-icons/im"
import { Link } from 'react-router-dom'


const Category = () => {
    let dropRef = useRef(null)
    let logRef = useRef(null)

    const data = useSelector((state)=>{
        return(
            state.counter.value
        )
    })

    let handleBtn = ()=>{
        // console.log(dropRef);

        if(dropRef.current.style.display =="block"){
            dropRef.current.style.display="none"
        }

        else{
            dropRef.current.style.display="block"
        }
    }
    

    let handleIcon = () =>{
        if(logRef.current.style.display =="block"){
            logRef.current.style.display="none"
        }

        else{
            logRef.current.style.display="block"
        }
    }

    let cartRef = useRef(null)
    let cartHandleBtn = ()=>{
        // console.log(dropRef);

        if(cartRef.current.style.display =="block"){
            cartRef.current.style.display="none"
        }

        else{
            cartRef.current.style.display="block"
        }
    }

  return (
    <section className="py-6 bg-gray-100 border-y-2 border-categoryBoderColor">
        <Container className='relative'>
            <Flex style="items-center">
                <div className="w-1/4">
                    <Flex style="items-center gap-3">
                       <button onClick={handleBtn}>
                       <Bar/>
                       </button>
                        <Paragraph style="text-sm text-headingColor" text="Shop by Category"/>
                    </Flex>
                </div>
                <div className="w-1/2">
                   <Flex style="items-center justify-center">
                   <input className="w-[600px] py-4 px-5 outline-none placeholder:text-dm placeholder:text-sm placeholder:font-regular placeholder:text-placeholderColor" type="text" placeholder="Search Products"/>
                    <FaSearch className="ml-[-30px]"/>
                   </Flex>
                </div>
                <div className="w-1/4">
                    <Flex style="justify-end">
                        <button onClick={handleIcon} className='flex'>
                        <FaUser/>
                        <FaCaretDown/>
                        </button>
                        <div className='relative'>
                           <Link>
                            <FaShoppingCart className="ml-5" onClick={cartHandleBtn}/>
                                <Paragraph style='font-bold text-[15px] px-[10px] absolute top-[-15px] left-[25px]' text={data}/>
                           </Link>
                        </div>
                    </Flex>
                </div>
            </Flex>
            <div className='w-[250px] bg-black hidden absolute top-[170px] left-[70px]' ref={dropRef}>
                    <ul>
                        <CategoryMenuItem to='#' text='Accesories'/>
                        <CategoryMenuItem to='#' text='Furniture'/>
                        <CategoryMenuItem to='#' text='Electronics'/>
                        <CategoryMenuItem to='#' text='Clothes'/>
                        <CategoryMenuItem to='#' text='Bags'/>
                        <CategoryMenuItem to='#' text='Home appliances'/>
                    </ul>
                </div>

                <div className='w-[150px] bg-white rounded-md  absolute top-[160px] right-[100px] hidden' ref={logRef}>
                    <div className='hover:bg-black hover:text-white'>
                        <Button className='w-full block  py-[17px]' to='/sing-up' text='Sing Up'/>
                    </div>
                    <div className='hover:bg-black hover:text-white'>
                        <Button className='w-full block  py-[17px]' to='singin' text='Sing In'/>
                    </div>
                </div>

                <div className='w-[300px] border-2 border-[#F0F0F0] absolute left-[1000px] hidden' ref={cartRef}>
                    <Flex className='bg-[#F5F5F3]'>
                       <Image style='p-5' src={img}/>
                       <div className='py-5'>
                       <Flex style='items-center gap-x-5'>
                        <div>
                            <Heading text='Balck Smart Watch' as='h2'/>
                            <Heading style='pt-2' text='$44.00' as='h2'/>
                        </div>
                        <ImCross className='font-bold'/>
                        </Flex>
                       </div>
                    </Flex>

                    <div className='p-5 bg-white'>
                        <Heading style='text-[#767676] text-[16px] pb-[10px]' text='Subtotal: #$44.00#' as='h2'/>
                        <Flex style='gap-x-5'>
                            <Button className='px-[19px] border-2 border-black rounded-sm hover:bg-black hover:text-white' text='View Cart'/>
                            <Button className='px-[19px] border-2 border-black rounded-sm hover:bg-black hover:text-white' text='Checkout'/>
                        </Flex>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default Category