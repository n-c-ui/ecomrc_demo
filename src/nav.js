import React from "react"
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'

const Nav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
        <div className="free">
            
                <div className="icon">
                  <FaTruck/>   
                </div>
                <p>FREE Shipping When Shopping up to $100 </p>
        </div>
<div className="main_header">
    <div className="container">
        <div className="logo">
            <img src='./img/E-store.png' alt='logo'></img>
        </div>
        <div className="search_box">
            <input type="text" value="" placeholder="Search for a product .." autoComplete="off"></input>
            <button>Search</button>
        </div>
        <div className="icon">
            <div className="account">
                <div className="user_icon">
                      <BiUserCircle/>
                </div>
                <p>Hello, user</p>
            </div>
            <div className="second_icon">
                <Link to="/" className="link"><AiOutlineHeart/></Link>
                <Link to="/cart" className="link"><BsBagCheck/></Link>
            </div>
        </div>
    </div>
</div>
<div className="header">
    <div className="container">
        <div className="nav">
            <ul>
            <li>
            <Link to='/' className="link">Home</Link>
            </li>
            <li>
            <Link to='/products' className="link">Products</Link>
            </li>
            <li>
            <Link to='/about' className="link">About</Link>
            </li>
            <li>
            <Link to='/contact' className="link">Contact</Link>
            </li>
        </ul>
        </div>
        
        <div className="auth">
            <button onClick={() => loginWithRedirect()}><FiLogIn/></button>
            <button><FiLogOut/></button>
        </div>
    </div>
</div>
        </>
    )
}

export default Nav