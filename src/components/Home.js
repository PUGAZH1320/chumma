import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>Home Page</div>
    <button onClick={()=> navigate('userlogin')}>User Login</button>
    <button onClick={()=> navigate('adminlogin')}>Admin Login</button>
    </>
  )
}

export default Home