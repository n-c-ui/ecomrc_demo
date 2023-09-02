import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { PiCurrencyDollarSimpleDuotone } from 'react-icons/pi';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineCloseCircle } from 'react-icons/ai';
import HomeProduct from './HomeProduct';
import './Home.css';


const Home = ({detail, view, close, setClose, addToCart}) => {
    return (
        <>
        {
            close ?
            <div className='product_detail'>
            <div className='container'>
                <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                {
                    detail.map((curElm) =>
                    {
                        return(
                            <div className='product_box'>
                                <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.Category}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <p>Lorem Ipsum</p>
                                    <h3>${curElm.Price}</h3>
                                    <button></button>
                                </div>
                            </div>  
                        )
                    }
                    )
                }
                <div className='product_box'></div>
            </div>
        </div> : null
        }
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>Don't Miss Our Big Sale!</h2>
                        <Link to='/Products' className='link'>Shop Now <BsArrowRightCircle /></Link>
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
                            <FiTruck />
                        </div>
                        <div className='detail'>
                            <h3>Free Shipping</h3>
                            <p>Order above $100</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <PiCurrencyDollarSimpleDuotone />
                        </div>
                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money Back Guaranteed</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <HiOutlineReceiptPercent />
                        </div>
                        <div className='detail'>
                            <h3>Members Discount</h3>
                            <p>On every order</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BiSupport />
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>24/7 hotline: 90210</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>Top Products</h2>
                <div className='container'>
                    {
                        HomeProduct.map((curElm) => {
                            return (
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                            <li onClick={() => addToCart (curElm)}><TbShoppingCartPlus /></li>
                                            <li onClick={() => view (curElm)}><AiOutlineEye/></li>
                                            <li><FcLike /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Category}</p>
                                        <p>{curElm.Title}</p>
                                        <p>${curElm.Price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>LATEST ADDED PRODUCTS</h4>
                        <h3>Apple iPad Pro M2, 2022, 6th Gen - 2023</h3>
                        <p>$968</p>
                        <Link to='/Products' className='link'>Shop Now <BsArrowRightCircle/></Link>
                    </div>
                    <div className='img_box'>
                        <img src='./img/ipadpro.jpg' alt='sliderImg'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home