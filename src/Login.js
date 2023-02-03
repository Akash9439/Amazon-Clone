import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import {auth} from './firebase'

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const signIn = e =>{
    e.preventDefault();

    //do some firebase 
    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
          navigate('/');
        })
        .catch(error => alert(error.message))
  }

  const register = e =>{
    e.preventDefault();

    //do some firebase
    auth
       .createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
        //it successfully registered
        if(auth)
        {
          navigate('/');
        }
       })
       .catch(error => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/"><img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/></Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h3>E-mail</h3>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

          <h3>Password</h3>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

          <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>
        <p>
             By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
             see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login