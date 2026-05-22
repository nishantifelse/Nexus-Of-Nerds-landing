import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Profile from './Pages/Profile'
import { AppContext } from './context/AppContext'

const App = () => {
  const { isLoggedIn, loading } = useContext(AppContext)

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App