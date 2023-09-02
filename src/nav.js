import React, { useState } from "react"
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'

const Nav = ({searchBtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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
            <input type="text" value={search} placeholder="Search for a product .." autoComplete="off" onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={() => searchBtn(search)}>Search</button>
        </div>
        <div className="icon">
            {
                isAuthenticated && 
                (
                <div className="account">
                <div className="user_icon">
                      <BiUserCircle/>
                </div>
                <p>Hello, {user.name}</p>
                </div>  
                ) 
            }
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
            <Link to='/Product' className="link">Products</Link>
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
            {
                isAuthenticated ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><FiLogOut/></button>
                :
                <button onClick={() => loginWithRedirect()}><FiLogIn/></button>
             }
        </div>
    </div>
</div>
        </>
    )
}

export default Nav