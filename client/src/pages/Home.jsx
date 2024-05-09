import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='mt-[200px]'>
        Home
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Home