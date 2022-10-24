import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Services from './pages/Services/Services'
import Pricing from './pages/Pricing/Pricing'
import Contact from './pages/Contact/Contact'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/palvelut' element={<Services />}></Route>
        <Route path='/hinnasto' element={<Pricing />}></Route>
        <Route path='/yhteystiedot' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}
