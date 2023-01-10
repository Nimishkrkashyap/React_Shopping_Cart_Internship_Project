import React from 'react'
import './Navbar.css'

const Navbar = ({size, setShowHome}) => {
  return (
    <div className='navContainer'>
        <button onClick={() => setShowHome(true)}>Home</button>
        <button onClick={() => setShowHome(false)}>Cart<span>{size}</span></button>
    </div>
  )
}

export default Navbar