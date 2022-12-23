import React from 'react'
import ReactPlayer from 'react-player'
import { Box, Center} from '@chakra-ui/react'
import img from './assets/movete-8.png'

const ReelComponent = () => {



    return (
        <Center id='particles-js' backgroundImage={img} height={'98vh'} margin-top={'auto'}>
            <ReactPlayer style={{ 'margin': 'auto' }} width={'100%'} height={'100%'} url='https://www.youtube.com/watch?v=nUumeBJ113Y' /> 
        </Center>
    
    )
}

export default ReelComponent