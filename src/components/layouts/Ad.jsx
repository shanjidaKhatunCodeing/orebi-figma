import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import ad1 from '../../assets/ad1.png'
import ad2 from '../../assets/ad2.png'
import ad3 from '../../assets/Ad3.png'

const Ad = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <Flex style='gap-x-10'>
                <div className='w/2'>
                    <Image src={ad1}/>
                </div>
                <div className='w/2'>
                    <Image src={ad2}/>
                    <Image src={ad3} style='pt-10'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Ad