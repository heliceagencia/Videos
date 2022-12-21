import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactPlayer from 'react-player'
import { Box, Center } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import AdnComponent from './AdnComponent'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/adn" element={<AdnComponent />} />
      </Routes>
    </Router>
  )
}

export default App
