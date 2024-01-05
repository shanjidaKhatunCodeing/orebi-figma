import React from 'react'
import Image from '../Image'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <section id='Banner'>
        <a href="https://www.daraz.com.bd/" target='_blank'>
            <Image src={banner}/>
        </a>
    </section>
  )
}

export default Banner