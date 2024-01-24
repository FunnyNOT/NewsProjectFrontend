import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import WebsiteProfilePage from './components/WebsiteProfilePage'
import AboutUs from './components/AboutUs'
import Login from './components/Registration_draft'
import YourComponent from './components/TestingLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/:websiteImageName' element={<WebsiteProfilePage />} />
        <Route path='/about' exact element={<AboutUs />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/login_testing' exact element={<YourComponent />} />
      </Routes>
    </Router>
  )
}

export default App
