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
                <div className="w-1/2 ml-[150px]">
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
                            <FaShoppingCart className="ml-5"/>
                            <Paragraph style='font-bold text-[15px] px-[10px] absolute top-[-15px] left-[25px]' text={data}/>
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
        </Container>
    </section>
  )
}

export default Category