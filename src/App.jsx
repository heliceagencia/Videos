import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactPlayer from 'react-player'
import { Box, Center } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AdnComponent from './AdnComponent'
import ReelComponent from './ReelComponent'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/adn" element={<AdnComponent />} />
        <Route path="/reelMotion" element={<ReelComponent />} />
      </Routes>
    </HashRouter>
  )
}

export default App
