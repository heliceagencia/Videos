import React from 'react'
import ReactPlayer from 'react-player'
import { Box, Center} from '@chakra-ui/react'
import img from './assets/movete-8.png'

const AdnComponent = () => {



    return (
        <Center id='particles-js' backgroundImage={img} height={'95vh'} margin-top={'auto'}>
            <ReactPlayer style={{ 'margin': 'auto' }} width={'90%'} height={'90%'} url='https://youtu.be/YLyEzi7lA-s' /> 
        </Center>
    
    )
}

export default AdnComponent