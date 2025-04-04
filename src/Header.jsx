import React from 'react'
import { Navbar } from './Navbar'


export const Header = () => {
  return (
    <header>
        <div className='title'>
            <a href="#"><img src="src/assets/favicon.png" alt="logo" title='logo'/></a>
            <h1>Figeroa Fotography</h1>
        </div>
        <Navbar />
    </header>
  )
}
