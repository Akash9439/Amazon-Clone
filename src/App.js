import "./App.css";
import React,{useEffect} from "react";
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Element} from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51MJcuYSA6XjsmDbh4DaStVNeyK0Bd9I3s6yimPzrVkQ9c8pNF70DRI6FjVtTOpTnzi5IowoZGxB5nxFR5uC9WEF800r5eSdaDG");

function App() {



  const [{basket,user},dispatch]=useStateValue();

  useEffect(()=>{
    //will only run when the app component loads..
    auth.onAuthStateChanged(authUser=>{
      console.log("USER>>>>",authUser);
      if(authUser)
      {
        //the user is logged in...
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else
      {
        //the user is logged out...
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  




  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/payment" element={[<Header />,<Element stripe={promise}><Payment /></Element>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
