import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const Navigate = useNavigate();

    return (
        <div className="navbar-container">
            <div className="navbar-header">
                <h2>Assignment</h2>
            </div>
            <div className="btn">
                <button className='login' onClick={() => {Navigate('/login')}} >Login</button>
                <button className='register' onClick={() => {Navigate('/register')}}>Register</button>
            </div>
        </div>
    )
}

export default Navbar