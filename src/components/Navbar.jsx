import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className='nav-logo-container'>
            <h2>GPT3</h2>
        </div>
        <div className='nav-links-container'>
            <ul>
                <li>Home</li>
                <li>What is GPT?</li>
                <li>Open AI</li>
                <li>Case Study</li>
                <li>Library</li>
            </ul>
        </div>
        <div className='nav-buttons-container'>
            <p>Sign in</p>
            <button>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar