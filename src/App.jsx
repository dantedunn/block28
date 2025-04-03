import './index.css'
import { Routes, Route } from 'react-router'
import Red from './pages/Red'
import Blue from './pages/Blue'
import Green from './pages/Green'
import Navbar from './Components/Navbar'
import Home from './pages/Home'


function App() {

  return (
    <>
    <h1>The Home Page</h1>
    <Navbar />
    <div id='main-section'>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path = "/Red" element={<Red />} /> 
        <Route path = "/Blue" element={<Blue />} />
        <Route path = "/Green" element={<Green />} />

      </Routes>
      </div>
    </>
  )
}

export default App
