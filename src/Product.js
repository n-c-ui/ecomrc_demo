import React from "react";
import ProductDetails from "./ProductDetails";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { FcLike } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import './Product.css'

const Product = ({ product, setProduct, detail, view, close, setClose, addToCart }) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const filterProduct = (product) => {
        const update = ProductDetails.filter((x) => {
            return x.Category === product;
        })
        setProduct(update);
    }
    const AllProducts = () => {
        setProduct(ProductDetails);
    }
    return (
        <>
            {
                close ?
                    <div className='product_detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
                            {
                                detail.map((curElm) => {
                                    return (
                                        <div className='product_box'>
                                            <div className='img-box'>
                                                <img src={curElm.Img} alt={curElm.Title}></img>
                                            </div>
                                            <div className='detail'>
                                                <h4>{curElm.Category}</h4>
                                                <h2>{curElm.Title}</h2>
                                                <p>Lorem Ipsum</p>
                                                <h3>{curElm.Price}</h3>
                                                <button>Add To Cart</button>
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


            <div className='products'>
                <h2># Products</h2>
                <p>Home - Products</p>
                <div className='container1'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => AllProducts("All")}>All Products</li>
                                <li onClick={() => filterProduct("Camera")}>Camera</li>
                                <li onClick={() => filterProduct("Sound")}>Sound</li>
                                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                                <li onClick={() => filterProduct("Computer Accessories")}>Computer Accessories</li>
                                <li onClick={() => filterProduct("Office Furniture")}>Office Furniture</li>
                                <li onClick={() => filterProduct("Lights")}>Lights</li>
                                <li onClick={() => filterProduct("Home Appliances")}>Home Appliances</li>
                                <li onClick={() => filterProduct("Mug")}>Mug</li>
                                <li onClick={() => filterProduct("Charger Unit")}>Charger Unit</li>
                                <li onClick={() => filterProduct("Car Accessories")}>Car Accessories</li>
                            </ul>
                        </div>
                    </div>
                    <div className='productBox'>
                        <div className='container2'>
                            {
                                product.map((curElm) => {
                                    return (
                                        <>
                                        <div className='box' key={curElm.id}>
                                            <div className='img_box'>
                                                <img src={curElm.Img} alt={curElm.Title}></img>
                                                <div className='icon'>
                                                    {
                                                        isAuthenticated ?
                                                        <li onClick={() => addToCart (curElm)}><TbShoppingCartPlus /></li>
                                                        :
                                                        <li onClick={() => loginWithRedirect}><TbShoppingCartPlus /></li>
                                                    }                                                    
                                                    <li><FcLike /></li>
                                                    <li onClick={() => view (curElm)}><AiOutlineEye/></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <p>{curElm.Category}</p>
                                                <p>{curElm.Title}</p>
                                                <p>${curElm.Price}</p>
                                            </div>
                                        </div>
                                        </>
                                        
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product