import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactPlayer from 'react-player'
import { Box, Center } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AdnComponent from './AdnComponent'
import ReelComponent from './ReelComponent'
import Manifiesto from './Manifiesto'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/adn" element={<AdnComponent />} />
        <Route path="/reelMotion" element={<ReelComponent />} />
        <Route path='/manifiesto' element={<Manifiesto />} />
      </Routes>
    </HashRouter>
  )
}

export default App
