import React from 'react'
import Categories from './Categories'
import Products from './Products'

const Content = () => {
  return (
          <>
          <div className='statistic-layout'>
            <div className='statistics'>
              <span className='statistic-title'>Orders</span>
              <div className='statistic-count'>
                <div className='image'>
                  <img src={require('../images/order.png')} alt='...'/>
                </div>
                <span>23</span>
              </div>
              </div>
              
            <div className='statistics'>
              <span className='statistic-title'>Users</span>
              <div className='statistic-count'>
                <div className='image'>
                  <img src={require('../images/users.png')} alt='...'/>
                </div>
                <span>23</span>
              </div>
              </div>

            <div className='statistics'>
              <span className='statistic-title'>Products</span>
              <div className='statistic-count'>
                <div className='image'>
                  <img src={require('../images/products.png')} alt='...'/>
                </div>
                <span>23</span>
              </div>
            </div>
            
            <div className='statistics'>
              <span className='statistic-title'>Categories</span>
              <div className='statistic-count'>
                <div className='image'>
                  <img src={require('../images/category.png')} alt='...'/>
                </div>
                <span>23</span>
              </div>
            </div>
            

            <div className='add-product'>
              Add Product
            </div>

          </div>    

          
          <div className='products-title'>
            <h1 className='products'>Categories</h1>
         </div>
      
          <Categories />
          

          <div className='products-title'>
            <h1 className='products'>All Products</h1>
          </div>

          <Products />
      
       </>
  )
}

export default Content