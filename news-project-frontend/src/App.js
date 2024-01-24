import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import WebsiteProfilePage from './components/WebsiteProfilePage'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/:pseudoId/:websiteImageName' element={<WebsiteProfilePage />} />
        <Route path='/about' exact element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
