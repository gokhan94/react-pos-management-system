import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useState } from 'react'
import SidebarLeft from '../components/SidebarLeft'

const Dashboard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector(state => state.auth)
 
  const logoutUser = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    // <button onClick={logoutUser}>logout</button>
  }

  return (
    <>
      <div className='container' >
        
        <SidebarLeft />


        {/* Dynamic Page */}
        <div className='main-content'>
            <Outlet />
        </div>


        <div className='sidebarRight'>

          <div className='cart'>
         
            <div className='cart-header'> 
                <div className='cart-title'>
                  <span>Current Orders</span>
                  <span>Table</span>
                </div> 

                <div className='cart-number'>
                  <h3>#999555</h3>
                  <h3>T1</h3>
                </div>  
            </div>


            <div className='cart-items'>

              <div className='image'>
                <img src={require('../images/hamburger.png')} alt='...'/>
              </div>

              <div className='info'>

                <h4>Hamburger</h4>

                <div className='details'>

                  <div className='status'>
                        <span className='status-note'>Note:</span>
                        <p className='status-text'>Ready</p>
                  </div>
                  

                  <div className='price'>
                   <p>$2.5</p>
                  </div>

                  <div className='count'>
                    <button className='increment-btn' type='button'>+</button>
                    <span className='amount'>2</span>
                    <button className='decrement-btn' type='button'>-</button>
                  </div>
                  
                </div>
              </div>

            </div>
                        <div className='cart-items'>

              <div className='image'>
                <img src={require('../images/hamburger.png')} alt='...'/>
              </div>

              <div className='info'>

                <h4>Hamburger</h4>

                <div className='details'>

                  <div className='status'>
                        <span className='status-note'>Note:</span>
                        <p className='status-text'>Ready</p>
                  </div>
                  

                  <div className='price'>
                   <p>$2.5</p>
                  </div>

                  <div className='count'>
                    <button className='increment-btn' type='button'>+</button>
                    <span className='amount'>2</span>
                    <button className='decrement-btn' type='button'>-</button>
                  </div>
                  
                </div>
              </div>

            </div>

            <div className='cart-items'>

              <div className='image'>
                <img src={require('../images/hamburger.png')} alt='...'/>
              </div>

              <div className='info'>

                <h4>Hamburger</h4>

                <div className='details'>

                  <div className='status'>
                        <span className='status-note'>Note:</span>
                        <p className='status-text'>Ready</p>
                  </div>
                  

                  <div className='price'>
                   <p>$2.5</p>
                  </div>

                  <div className='count'>
                    <button className='increment-btn' type='button'>+</button>
                    <span className='amount'>2</span>
                    <button className='decrement-btn' type='button'>-</button>
                  </div>
                  
                </div>
              </div>

            </div>



            <div className='total-card'>
              <div className='total-items'>
                <span className='items-count'>Items (7)</span>
                <span className='items-price'>$28,67</span>
              </div>
              <div className='item-taxs'>
                <span className='item-tax'>Tax (%10)</span>
                <span className='item-tax-price'>$8,67</span>
              </div>
              <div className='divider'></div>
              <div className='total'>
                <span className='total-text'>Total </span>
                <span className='total-item-price'>$108,67</span>
              </div>
              
              <div className='pay'>
                <button className='pay-btn'>Pay</button>
              </div>
              
              
            </div>

            
          </div>
        </div>
      </div>
      </>
  )
}

export default Dashboard