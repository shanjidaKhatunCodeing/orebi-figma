import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import inf1 from '../../assets/inf1.png'
import inf2 from '../../assets/inf2.png'
import inf3 from '../../assets/inf3.png'
import Paragraph from '../Paragraph'

const Information = () => {
  return (
   <section className='py-7 border-b-2 border-listColor'>
    <Container>
        <Flex style='justify-between'>
            <div className='w-[30%'>
                <Flex>
                    <Image src={inf1}/>
                    <Paragraph style='text-listColor pl-2.5' text='Two years warranty'/>
                </Flex>
            </div>
            <div className='w-[30%'>
                <Flex>
                    <Image src={inf2}/>
                    <Paragraph style='text-listColor pl-2.5' text='Free shipping'/>
                </Flex>
            </div>
            <div className='w-[30%'>
                <Flex>
                    <Image src={inf3}/>
                    <Paragraph style='text-listColor pl-2.5' text='Return policy in 30 days'/>
                </Flex>
            </div>
        </Flex>
    </Container>
   </section>
  )
}

export default Information