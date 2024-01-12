import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'

const Navbar = () => {
  return (
    <nav className="py-8">
        <Container>
            <Flex>
                <div className="w-[10%] bg-white">
                    <Image src={logo}/>
                </div>
                <div className="w-[90%]">
                    <ul>
                        <Flex style="justify-center gap-x-5">
                            <List text="Home" to="/"/>
                            <List text="Shop" to="/shop"/>
                            <List text="About" to="/about"/>
                            <List text="Contacts" to="/contact"/>
                            <List text="Journal" to="/journal"/>
                        </Flex>
                    </ul>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar