import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
function LoginPage() {
    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const login=async ()=>{
        try{
        await signInWithEmailAndPassword(getAuth(),email, password);
            navigate('/articles');
        }catch(e)
        {
            setError(e.message);
        }
    }
  return (
   <>
   <h1>Login Page</h1>
   {error&&<p className='error'>{error}</p>}
   <label>Email <input type='email' value={email} placeholder='abc@gmail.com' onChange={(email)=>{setEmail(email.target.value)}}/></label>
   <label>Password <input type='password' value={password} placeholder='password' onChange={(password)=>{setPassword(password.target.value)}}/></label>
   <button onClick={login}>Log In</button>
   <Link to="/register">Don't have an account? Create One.</Link>
   </>
  )
}

export default LoginPage