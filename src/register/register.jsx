import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth, fs, storage } from '../config.js'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    var date = new Date();
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errName, setErrName] = useState();
  const [errEmail, setErrEmail] = useState();
  const [errPhoneNumber, setErrPhoneNumber] = useState();
  const [errPassword, setErrPassword] = useState();
  const [errConfirmPassword, setErrConfirmPassword] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    setErrName('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setErrPhoneNumber('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrConfirmPassword('');
  };

  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/);
  };
//   const handleRegistration = (e) => {
//     e.preventDefault();
//     // Validation logic for all fields
//     if (!name) {
//         setErrName("Please enter your name.");
//         return;
//       }

//       if(!email)
//       { setErrEmail("Enter your email");}
//       else if(!emailValidation(email))
//       { setErrEmail("Enter a valid email");}
     

//       if (!phoneNumber) {
//         setErrPhoneNumber("Please enter your phone number.");
//         return;
//       } else if (!phoneNumber.match(/^\d{10}$/)) {
//         setErrPhoneNumber("Please enter a valid 10-digit phone number.");
//         return;
//       }

//       if (!password) {
//         setErrPassword("Please enter your password.");
//         return;
//       } else if (password.length < 6) {
//         setErrPassword("Password must be at least 6 characters long.");
//         return;
//       }

//       if (!confirmPassword) {
//         setErrConfirmPassword("Please confirm your password.");
//         return;
//       } else if (confirmPassword !== password) {
//         setErrConfirmPassword("Passwords do not match.");
//         return;
//       }

//   };

  const handelRegister = (e) => {
    e.preventDefault();
    if (!name) {
        setErrName("Please enter your name.");
        return;
      }

      if(!email)
      { setErrEmail("Enter your email");}
      else if(!emailValidation(email))
      { setErrEmail("Enter a valid email");}
     

      if (!phoneNumber) {
        setErrPhoneNumber("Please enter your phone number.");
        return;
      } else if (!phoneNumber.match(/^\d{10}$/)) {
        setErrPhoneNumber("Please enter a valid 10-digit phone number.");
        return;
      }

      if (!password) {
        setErrPassword("Please enter your password.");
        return;
      } else if (password.length < 6) {
        setErrPassword("Password must be at least 6 characters long.");
        return;
      }

      if (!confirmPassword) {
        setErrConfirmPassword("Please confirm your password.");
        return;
      } else if (confirmPassword !== password) {
        setErrConfirmPassword("Passwords do not match.");
        return;
      }
    const uref = auth.createUserWithEmailAndPassword(email, password)
    uref.then((credentials) => {
        fs.collection('users').doc(credentials.user.uid).set({
            Name: name,
            Email: email,
            Phone: phoneNumber,
            Password: password,
            Created: date
        }).then(() => {
            setSuccessMsg('Registration Successfull.');
            setName('');
            setErrorMsg('');
            setEmail('');
            setPassword('');
            setTimeout(() => {
                setSuccessMsg('');
                // hideLoader();
                // router.push('/');
                navigate('/');
            }, 1000)
        })
    })
    .catch(err => 
        setErrorMsg(err.message))
        // .then(() => hideLoader()
        // );

}

  return (
    <main>
        
<nav class="flex  py-6 ps-8" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
  
  </ol>
</nav>


    
    <div className='h-screen flex items-center justify-center'>
        


      <form className='max-w-md w-full p-8 bg-gray-900 rounded-lg shadow-lg' onSubmit={handelRegister}>
        <h2 className='text-4xl text-white font-bold text-center mb-8'>REGISTER YOURSELF</h2>
        <div className='mb-4'>
          <label className='text-gray-400'>Name</label>
          <input
            onChange={handleName}
            value={name}
            className='rounded-lg bg-gray-700 mt-2 p-2 w-full focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
          />
          {errName && <p className='text-red-600 text-xs mt-1'>{errName}</p>}
        </div>
        <div className='mb-4'>
          <label className='text-gray-400'>Email</label>
          <input
            onChange={handleEmail}
            value={email}
            className='rounded-lg bg-gray-700 mt-2 p-2 w-full focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='email'
          />
          {errEmail && <p className='text-red-600 text-xs mt-1'>{errEmail}</p>}
        </div>
        <div className='mb-4'>
          <label className='text-gray-400'>Phone Number</label>
          <input
            onChange={handlePhoneNumber}
            value={phoneNumber}
            className='rounded-lg bg-gray-700 mt-2 p-2 w-full focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='number'
          />
          {errPhoneNumber && <p className='text-red-600 text-xs mt-1'>{errPhoneNumber}</p>}
        </div>
        <div className='mb-4'>
          <label className='text-gray-400'>Password</label>
          <input
            onChange={handlePassword}
            value={password}
            className='rounded-lg bg-gray-700 mt-2 p-2 w-full focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='password'
          />
          {errPassword && <p className='text-red-600 text-xs mt-1'>{errPassword}</p>}
        </div>
        <div className='mb-4'>
          <label className='text-gray-400'>Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            value={confirmPassword}
            className='rounded-lg bg-gray-700 mt-2 p-2 w-full focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='password'
          />
          {errConfirmPassword && <p className='text-red-600 text-xs mt-1'>{errConfirmPassword}</p>}
        </div>
        <button  type="submit" 
          className='w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg focus:outline-none'>
          REGISTER
        </button>
        <div>
            Already have an account? <Link to="/login"><a className="link link-info"> login here </a> </Link>
        </div>
      </form>
      {successMsg && <><div className="alert alert-success">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{successMsg}</span>
                            </div></>}
                            {errorMsg && <><div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{errorMsg}</span>
                            </div></>}
                           
    </div>
    </main>
  );
}
