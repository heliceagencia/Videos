import React from 'react'
import ReactPlayer from 'react-player'
import { Box, Center } from '@chakra-ui/react'
import img from './assets/movete-8.png'


const Manifiesto = () => {
    return (
        <Center id='particles-js' backgroundImage={img} height={'98vh'} margin-top={'auto'}>
            <ReactPlayer style={{ 'margin': 'auto' }} width={'90%'} height={'90%'} url='https://youtu.be/SKu5LY88vmY' controls />
        </Center>
    )
}

export default Manifiesto