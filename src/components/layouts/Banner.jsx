import React from 'react'
import Image from '../Image'
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section id='Banner'>
        <Link to="https://www.daraz.com.bd/" target='_blank'>
            <Image src={banner}/>
        </Link>
    </section>
  )
}

export default Banner