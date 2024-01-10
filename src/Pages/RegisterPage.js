import React, { useState } from 'react'

import { Link,useNavigate } from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
function RegisterPage() {
    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const register=async ()=>{
      if(password!==confirmPassword)
      {
        setError("Password don't match");
        setPassword('');
        setConfirmPassword('');
      }else{
        try{
        await createUserWithEmailAndPassword(getAuth(),email,password);
        navigate("/");
        }catch(e){
            console.log(e);
                }
      }
    }
  return (
   <>
   <h1>Register Page</h1>
   {error&&<p className='error'>{error}</p>}
   <label>Email <input type='email' value={email} placeholder='abc@gmail.com' onChange={(email)=>{setEmail(email.target.value)}}/></label>
   <label>Password <input type='password' value={password} placeholder='Password' onChange={(password)=>{setPassword(password.target.value)}}/></label>
   <label>Confirm Password <input type='password' value={confirmPassword} placeholder='Confirm Password' onChange={(password)=>{setConfirmPassword(password.target.value)}}/></label>
   <button onClick={register}>Register</button>
   <Link to="/login">Already have an account? Login.</Link>
   </>
  )
}

export default RegisterPage