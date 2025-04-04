import React from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header>
        <div className='title'>
            <Link to="/about"><img src="src/assets/favicon.png" alt="logo" title='logo'/></Link>
            <h1>Figeroa Fotography</h1>
        </div>
        <Navbar />
    </header>
  )
}
