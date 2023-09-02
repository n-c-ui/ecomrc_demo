import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
    return(
        <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img src='./img/E-store.png' alt='logo'></img>
                    </div>
                    <div className='detail'>
                        <p>Ecomrc is a demo store, all info and product details are for demonstration purposes only.</p>
                        <div className='icon'>
                            <li><AiFillGithub/></li>
                            <li><BsLinkedin/></li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Orders</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer