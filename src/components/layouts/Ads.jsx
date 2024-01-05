import React from 'react'
import Container from '../Container'
import Image from '../Image'
import ads from '../../assets/Ads2.png'

const Ads = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <a href="#">
                <Image src={ads}/>
            </a>
        </Container>
    </section>
  )
}

export default Ads