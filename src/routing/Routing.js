import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Register from '../components/register/Register'
import Login from '../components/login/Login'
import LandingPage from '../LandingPage'

const Routing = () => {
  return (
    <Routes>
      <Route path = '/landingpage' element = {<LandingPage/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path = '/login' element = {<Login/>}/>
    </Routes>
  )
}

export default Routing