import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LaxInfo from './pages/LaxInfo'
import AirportDiagram from './pages/AirportDiagram'
import UnknownEndpoint from './pages/UnknownEndpoint'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/airportdiagram' element={<AirportDiagram />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/laxinfo' element={<LaxInfo />} />
        <Route path='*' exact={true} element={<UnknownEndpoint />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
