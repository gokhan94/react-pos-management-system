import { React, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice'
import { setEditProduct, removeProduct } from '../features/product/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { productSubTotal, productTax, productTotalAmount } from '../features/cart/cartSlice';
const ProductItem = ({ product }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addCart = (product) => {
      dispatch(addToCart(product))
  }

  const removeItem = (product) => {
    dispatch(removeProduct(product))
  }

  const { cartItems } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(productSubTotal())   
        dispatch(productTax())  
        dispatch(productTotalAmount())  
    }, [dispatch, cartItems])
  
  const setEdit = (product) => {
    const {name, stock, image, price, category } = product
    
    dispatch(setEditProduct({
      name,
      stock,
      image,
      price,
      category, 
      editProductId: product._id
    }))

    navigate('/dashboard/form')
  }

  return (
            <div className='product-cart'>
            <Link to="/dashboard/form" onClick={() => { setEdit(product) }} >
                {product.image ? <img className='product-image' src={product.image} alt='...' />
                :
                <img className='default-image' src={require('../images/product.png')} alt='...' />
              }
            </Link>
              <div className='product-cart-detail'>
                <h4>{ product.name }</h4>
              <p className='product-price'>$ { product.price }</p>
                <span className='stock-status'>
                  <span className='stock'>{ product.stock } stock</span>
                  <span className='available'>available</span>
                </span>
              </div>
      
              <div className='add-product-cart'>
        
              {product.stock === 0 ?
                <div className='cart-stock'>Out Of Stock</div>
                :
                <button className='add-cart' type='submit' onClick={() => { addCart(product) }}>Add Cart</button>
              }
      </div>
      
      <button className='product-delete' type='button'  onClick={() => {  removeItem(product) }}>X</button>  </div>
  )
}

export default ProductItem