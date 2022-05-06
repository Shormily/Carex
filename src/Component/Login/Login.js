import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import useAuth from '../Hooks/useFirebase';
import login from "../Home/Images/login.jpg"; 
import "./Login.css";
// import useFirebase from '../Hooks/useFirebase';
// import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
  const {signInUsingGoogle  ,createNewUserByEmail,} = useFirebase();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [isLogin,setIsLogin] = useState(false)
 
const auth = getAuth()

  const handleRegister = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be at least 6 characters long.')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
setError('Password Must contain 2 upper case');
return;
    }
    if(isLogin){
      processLogin(email,password);
    }
    else{
      registerNewUser(email,password);
    }
    
  }
  const processLogin = (email,password) =>{
    signInWithEmailAndPassword   (auth,email,password)
    .then((result) => {
     const user = result.user;
     console.log(user);
     setError('Successfully Log In !!Now Go To Another Page');
    })
    .catch((error) => {
      setError(error.message);
    });
  }

    const registerNewUser = (email,password)=>{
      createUserWithEmailAndPassword  (auth, email, password)
      .then(result=>{
          const user =result.user;
          createNewUserByEmail()
          console.log(user)
          setError('Successfully Sign In!!Now Go To Another Page');
          verifyEmail();
      })
      .catch(error =>{
        setError("already use this email")
      })
     
    }
    const handleResetPassword = () =>{
      sendPasswordResetEmail (auth,email)
      .then(result =>{

      })
    }
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result =>{
        console.log(result);
      })
    }
    
    const toggleLogin = e =>{
      setIsLogin(e.target.checked)
    }
    
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    
  } 
  return (
    <>
      <div className='container'>
        <div className='row d-flex signup-page'>
          <h1 className='mt-5 text-dark mx-2 text-center colors'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Please {isLogin ? "Login" :" Sign In "} </h1>
          <div className='col-12 col-md-12 col-lg-6'>
            <img src={login} className="w-75 rounded-2 bg-dark p-2 mt-5 mb-5" data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500"    alt="" />
          </div>
          <div className=' contact col-md-6 col-12 col-lg-6 container  ' data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"  >
                <div className=' input-part mt-5 '>
              
                 <input
                  required
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow"
                placeholder="Name"
                type="text"
              />
                
                <input
                  required
                  type="text"
                  className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow"
                  placeholder="E-mail"
                  onChange={handleEmailChange} 
                  
                />
                <input
                  required
                  type="text"
                  className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
                <input
                  required
                  type="text"
                  className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 shadow"
                  placeholder="Re-Type-Password"  
                />
                 <Form.Check onChange={toggleLogin} className='decoration'  type="checkbox" label="Already You have Account? Please Log In.!!" />
                
                <p className='text-danger   '>{error}</p>
                <p  className='text-info password-mx  ' onClick={handleResetPassword}>Forgot Password? </p>
                <button className='container login-btn shadow text-dark w-25  rounded-2  mb-2  p-2 ' onClick={handleRegister}>{isLogin ? "Log In" : "Sign In"}</button>
                <button className='container   login-btn shadow text-light w-25 mx-5  rounded-2  mb-2 bg-dark p-2' onClick={signInUsingGoogle}>Google Sign In</button>
                
               
               
                </div>
               
              
            </div> 
        </div>
      </div>
    </>
  );
};

export default Login;