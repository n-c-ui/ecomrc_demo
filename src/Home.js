import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { PiCurrencyDollarSimpleDuotone } from 'react-icons/pi';
import { FiTruck } from 'react-icons/fi';
import './Home.css';


const Home = () => {
    return(
       <>
       <div className='top_banner'>
        <div className='container'>
        <div className='detail'>
            <h2>Don't Miss Our Big Sale!</h2>
            <Link to='/Products' className='link'>Shop Now <BsArrowRightCircle/></Link>
        </div>
        <div className='img_box'>
            <img src='./img/bigsale.jpg' alt='sale'></img>
        </div>
        </div>
       </div>
       <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                   <img src='./img/product1.jpg' alt='desktop accessories'></img>
                </div>
                <div className='detail'>
                    <p>16 Products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                   <img src='./img/product2.jpg' alt='drone'></img>
                </div>
                <div className='detail'>
                    <p>16 Products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                   <img src='./img/product3.jpg' alt='camera'></img>
                </div>
                <div className='detail'>
                    <p>16 Products</p>
                </div>
            </div>
        </div>
       </div>
       <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above $100</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <PiCurrencyDollarSimpleDuotone/>
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Guaranteed</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                </div>
            </div>
        </div>
       </div>
       </>
    )
}
export default Home