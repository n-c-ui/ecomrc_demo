import React, {useState} from 'react';
import Nav from './Nav';
import Rout from './Rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import ProductDetails from './ProductDetails';

const App = () => {
  //Add to cart
  const  [cart, setCart] = useState([])

  const addToCart = (product) => {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exist)
    {
      alert("This item is already added to cart")
    }
    else {
      setCart([...cart, {...product, qty:1}])
      alert("Product is added to cart")
    }
  }
  //product detail
  const [detail, setDetail] = useState([])
  const [close, setClose] = useState(false)

  //filter product
  const [product, setProduct] = useState(ProductDetails)
  const searchBtn = (product) =>
  {
      const change = ProductDetails.filter((x) =>
      {
        return x.Category === product
      })
      setProduct(change)
  }

  //product detail / view
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
    <BrowserRouter>
    <Nav searchBtn={searchBtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App