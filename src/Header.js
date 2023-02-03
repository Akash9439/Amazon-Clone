import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase';

function Header() {
const [{ basket, user }, dispatch] = useStateValue();


const handleAuthentication = () =>{
  if(user)
  {
    auth.signOut();
  }
}






  return (
    <div className='header'>
      <Link to='/'><img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' /></Link>
      <div className='header_search'>
        <input className='header_search_input' type='text'/>
        <SearchIcon className='header_searchicon' />
      </div>

      <div onClick={handleAuthentication} className='header_nav'>
        <Link to={!user && '/login'}>
        <div className='header_option'>
          <span className='header__option_LineOne'>Hello {!user?'Guest':user.email}</span>
          <span className='header__option_LineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div className='header_option'>
          <span className='header__option_LineOne'>Returns</span>
          <span className='header__option_LineTwo'>& Orders</span>
        </div>
        <div className='header_option'>
          <span className='header__option_LineOne'>Your</span>
          <span className='header__option_LineTwo'>Prime</span>
        </div>
      </div>
      <Link to='/checkout'>
      <div className='header_optionbasket'>
          <ShoppingBasketIcon />
          <span className='header__option_Lineone header_basketcount'>{basket?.length}</span>
      </div>
      </Link>
    </div>
  )
}

export default Header