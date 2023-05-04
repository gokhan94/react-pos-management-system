import React from 'react'

const ProductItem = ({product}) => {
  return (
            <div className='product-cart'>
              <img src={require('../images/hamburger.png')} alt='...' />
              <div className='product-cart-detail'>
                <h4>{ product.name }</h4>
              <p className='product-price'>$ { product.price }</p>
                <span className='stock-status'>
                  <span className='stock'>{ product.stock } stock</span>
                  <span className='available'>available</span>
                </span>
              </div>
            <div className='add-product-cart'>
                  <button className='add-cart' type='submit'>Add Cart</button>
              </div>
            </div>
  )
}

export default ProductItem