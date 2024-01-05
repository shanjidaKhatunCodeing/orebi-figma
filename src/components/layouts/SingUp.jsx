import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Label from '../Label'
import InputFiled from '../InputFiled'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"



const SingUp = () => {


    let [all, setAll] = useState([])

  useEffect(()=>{
    async function all(){
      let data = await axios.get('https://restcountries.com/v3.1/all')
      setAll(data.data)
    }
    all()
  },[])
  return (
    <section className='py[120px]'>
        <Container>
            <Heading style='pb-[50px]' text='Sing up' as='h2'/>
            <Heading style='pb-[40px]' text='New Customer' as='h2'/>
            <Flex className='justify-between gap-x-10'>
                <div className='w-[50%] pb-[40px]'>
                    <Label labelName='Address 1'/>
                    <InputFiled inPh='4279 Zboncak Port Suite 6212'/>
                </div>
                <div className='w-[50%] pb-[40px]'>
                    <Label labelName='Address 2'/>
                    <InputFiled/>
                </div>
                
            </Flex>
            <Flex className='justify-between gap-x-10'>
                <div className='w-[50%] pb-[40px]'>
                   <select className='w-[80%] outline-none font-bold'>
                    <option  value="">city</option>
                    {all.map(item=>
                        <option value="">{item.capital}</option>
                    )}
                   </select>
                   <div className='w-[80%] border-b-2 border-boderColor pt-[23px]'></div>
                    
                </div>
                <div className='w-[50%] pb-[40px]'>
                    <Label labelName='Post Code'/>
                    <InputFiled inPh='05228'/>
                </div>
                
            </Flex>
            <Flex className='justify-between gap-x-10'>
                <div className='w-[50%] pb-[40px]'>
                   <select className='w-[80%] outline-none font-bold'>
                    <option value="">Cuntry</option>
                   {all.map(item=>
                        <option value="">{item.name.common}</option>
                    )}
                   </select>
                   <div className='w-[80%] border-b-2 border-boderColor pt-[23px]'></div>
                </div>
                <div className='w-[50%] pb-[40px]'>
                   <select className='w-[80%] outline-none font-bold'>
                    <option  value="">Region/State</option>
                    {all.map(item=>
                        <option value="">{item.region}</option>
                    )}
                   </select>
                   <div className='w-[80%] border-b-2 border-boderColor pt-[23px]'></div>
                    
                    
                    
                    
                </div>     
            </Flex>
            
        </Container>
    </section>                                           
  )
}

export default SingUp