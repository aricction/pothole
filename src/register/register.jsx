import React, { useState } from 'react';


export default function Register() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
 
  //Error messages start
  const [errEmail,setErrEmail] = useState();
  const [errPassword,setErrPassword] = useState();
  
  //handle function  start

  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setErrEmail('');
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setErrPassword('');
  }

  
  //email validation
  const emailValidation=(email)=>{
    return String(email).toLowerCase().match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)
  }

  const handleLogin=(e)=>{
    e.preventDefault();
   if(!email)
   { setErrEmail("Enter your email");}
   else if(!emailValidation(email))
   { setErrEmail("Enter a valid email");}
   if(!password)
   { setErrPassword("Enter your password");}
   else if(password.length < 6)
   { setErrPassword("Passwords must be at least 6 characters");}
   if(email && emailValidation(email) && password && password.length>=6)
   {
      console.log(email,password);
      setEmail("");
      setPassword("");
   }
 }



    return (
      <div className='h-screen w-full'>
         
          <div className='my-20 flex flex-col justify-center'>
              <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                  <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>User Email</label>
                      <input
                        onChange={handleEmail}
                        value={email} 
                      className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email"
                       />
                     {
                                errEmail && (
                                    <p className='text-red-600 text-xs font-semibold items-center gap-2 -mt-1.5'>
                                        <span className='italic font-titleFont font-extrabold text-base'>!</span> {errEmail}</p>
                                )
                             }
                  </div>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>Password</label>
                      <input 
                      onChange={handlePassword}
                      value={password}
                      className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                      />
                       {
                                errPassword && (
                                    <p className='text-red-600 flex text-xs font-semibold tracking-wide items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span> {errPassword}</p>
                                )
                             }
                  </div>
                  <div className='flex justify-between text-gray-400 py-2'>
                      <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                      <p>Forgot Password</p>
                  </div>
                  <button onClick={handleLogin} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGN IN</button>
                  
              </form>
          </div>
      </div>
    )
  
  
}