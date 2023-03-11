import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LaxInfo from './pages/LaxInfo'
import AirportDiagram from './pages/AirportDiagram'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/airportdiagram' element={<AirportDiagram />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/laxinfo' element={<LaxInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
