import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import WebsiteProfilePage from './components/WebsiteProfilePage'
import AboutUs from './components/AboutUs'
import { WebsiteProvider } from './global_functions/WebsiteContext'

function App() {
  return (
    <WebsiteProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
            <Route path='/:websiteImageName' element={<WebsiteProfilePage />} />          
          <Route path='/about' exact element={<AboutUs />} />
        </Routes>
      </Router>
    </WebsiteProvider>
  )
}

export default App
