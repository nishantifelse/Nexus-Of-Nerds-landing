import axios from 'axios'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Profile = () => {
  const {userData} = useContext(AppContext)
  
  return (
    <div>Hello {userData.firstName} 👋</div>
  )
}

export default Profile