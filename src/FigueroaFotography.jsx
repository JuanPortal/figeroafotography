import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Header } from './Header'
import { About } from './About'
import { Gallery } from './Gallery'
import { Contact } from './Contact'

function FigueroaFotography() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default FigueroaFotography
