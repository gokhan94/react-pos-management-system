import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import { FaHouseUser } from 'react-icons/fa';



const Login = () => {


  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const { email, password } = form

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, error, success, message } = useSelector(state => state.auth)

    useEffect(() => {
    if (error) {
      toast.error(message)
    }
    if (success || user) {
      navigate('/dashboard')
    }
    dispatch(reset())
    }, [error, success, user, message, navigate, dispatch])
  

  const onChange = (e) => {
    setForm({  ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const userData = {
     email, password
    }
    dispatch(login(userData))
  }


  return (
    <>
      <div className='icons-container'>
            
        <Link to='/'>
          <FaHouseUser className='icons' />
        </Link> 
        
      </div>
        <div className='auth-container'>
              <form className='register-form' onSubmit={handleSubmit}>
                  
                <h1>Login</h1>

                <div className='formInput'>
                  <label htmlFor="email">Email</label>   
                  <input type="email" placeholder='Email' name='email' value={email} onChange={onChange}/>  
                </div>     
                  
                  
                <div className='formInput'>
                  <label htmlFor="password">Password</label>   
                  <input type="password" placeholder='Password' name='password' value={password} onChange={onChange}/>  
                </div>

                <button type='submit' className='btn'>Log In</button>
       
          </form>
          </div>
      </>
  )
}

export default Login