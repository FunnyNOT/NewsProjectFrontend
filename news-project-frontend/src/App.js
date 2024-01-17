import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import WebsiteProfilePage from './components/WebsiteProfilePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/:websiteId' element={<WebsiteProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
