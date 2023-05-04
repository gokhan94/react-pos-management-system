import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <header>
          <div>
               <Link  to='/'>POS</Link>  
          </div>    
          <ul>
              <li>
                <Link  to='/login'>Login</Link> 
              </li>
              <li>
                <Link  to='/register'>Register</Link> 
              </li>
          </ul>
    </header>
  )
}

export default Home