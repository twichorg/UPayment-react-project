import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div className='navbar-container'>

    <h1 className='router-navbar-list'>
      <Link to={'/'}><span className='router-homepage'>UPayments</span></Link>        
    </h1>

    <h1 className='router-navbar-list'>
      <Link to={'/create'}><span  className='router-create-page'>CreatePage</span></Link> 
    </h1>

  </div>
  )
}

export default Navbar