// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import {toast} from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//   const navigate = useNavigate()
//     const [data, setData]=useState({
//         name:'',
//         email:'',
//         password:'',
//     })
    
//     const RegisterUser =  async (e) => {
//         e.preventDefault()
//         const {name, email, password} = data
//         try{
//           const {data} = await axios.post('http://localhost:8000/register',{
//             name, email, password
//           });
//           if(data.error){
//             toast.error(data.error)
//           }
//           else{
//             setData({ name: '',
//               email: '',
//               password: '',})
//             toast.success('Login Successfull')
//             navigate('/login')
//           }
//         }
//         catch(error){
//           toast.error('login failed')
//           console.log(error)
//         }
//     }
//   return (
//     <div>
//       <form onSubmit={RegisterUser}>
//         <label>Name</label>
//           <input type='text' placeholder='enter name' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
//           <label>Email</label>
//           <input type='email' placeholder='enter email' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
//           <label>Password</label>
//           <input type='password' placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
//        <button type='submit'>Register</button>
//       </form>
//     </div>
//   )
// }

// export default Register

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const RegisterUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('http://localhost:8000/register', {
        name,
        email,
        password,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          name: '',
          email: '',
          password: '',
        });
        toast.success('Registration Successful');
        navigate('/login');
      }
    } catch (error) {
      toast.error('Registration failed');
      console.log(error);
    }
  };

  return (
    <div className='outer'>
      <form onSubmit={RegisterUser}>
        <label>Name</label>
        <input
          type='text'
          placeholder='enter name'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='enter email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='enter password'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type='submit'>Register</button>
      </form>
      <div className="innner" ><img  src='/two.png' /></div>
    </div>
  );
};

export default Register;
