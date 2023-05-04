import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch} from 'react-redux'
import { register, reset } from '../features/auth/authSlice'

const Register = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { name, email, password } = form

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, success, error, message } = useSelector(state => state.auth)
  
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
      name, email, password
    }
    dispatch(register(userData))
  }

  return (
      <>
        <div className='auth-container'>
              <form className='register-form' onSubmit={handleSubmit}>
                  
                <h1>Register</h1>
                <div className='formInput'>
                    <label htmlFor="name">Name</label>   
                    <input type="text" placeholder='Name' name='name' value={name} onChange={onChange} />  
                  </div>
         
                <div className='formInput'>
                  <label htmlFor="email">Email</label>   
                  <input type="email" placeholder='Email' name='email' value={email} onChange={onChange} />  
                </div>     
                  
                  
                <div className='formInput'>
                  <label htmlFor="password">Password</label>   
                  <input type="password" placeholder='Password' name='password' value={password} onChange={onChange} />  
                </div>

                <button type='submit' className='btn'>Log In</button>
       
          </form>
          </div>
      </>
  )
}

export default Register