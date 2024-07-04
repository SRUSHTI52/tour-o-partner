import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import '../Login.css';

const Login = () => {
    
const navigate = useNavigate()  
const [data, setData]=useState({
    email:'',
    password:'',
})

const LoginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try{
      const {data} = await axios.post('http://localhost:8000/login',{
        email,
        password
      });
      if (data.error){
        toast.error(data.error)
        
      }
      else{
        toast.success('login successfull')
        setData({email:'',password:''})
        navigate('/')
      }
    }
    catch(error){
      console.log(error);
    }
}
  return (
    <div className='outer'>
       <form onSubmit={LoginUser}>
          <label>Email</label>
          <input type='email' placeholder='enter email' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
          <label>Password</label>
          <input type='password' placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
       <button type='submit'>Login</button>
      </form>
      <div className="innner" ><img  src='/one.png' /></div>
    </div>
  )
}

export default Login
