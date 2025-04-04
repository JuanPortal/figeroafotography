import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <ul>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
    </ul>
  )
}
