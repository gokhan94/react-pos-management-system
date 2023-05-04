import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaHome, FaList, FaShopify, FaUserCircle, FaUser, FaPizzaSlice } from 'react-icons/fa';

const SidebarLeft = () => {
  return (
        <div className='sidebarLeft'>

          <div className='menu-links'>
            
           <Link to="/dashboard"> <FaHome className='menu-icon' /> Home </Link>
           <Link to="/dashboard/orders"> <FaShopify className='menu-icon' /> Order </Link>
           <Link to="/dashboard/form"> <FaPizzaSlice className='menu-icon' />Add</Link>

            <a href='/'><FaList className='menu-icon' />Table</a>
            
          </div>

          <div className='user-info'>
            <a href='/'><FaUser className='menu-icon' />Profile</a>
            <a href='/'><FaUserCircle className='menu-icon' />Settings</a>
          </div>

        </div>
  )
}

export default SidebarLeft