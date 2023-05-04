import React from 'react'

const Orders = () => {
  return (
       
          <div className='order-details'>
            <div className='order-title'>
              <span className='order-id'>Orders: #90765</span>
              <span className='order-time'>20:30 PM</span>
            </div>
            <div className='order-total'>
              <span className='qta'>Qta : 7</span>
              <span className='order-price-detail'>
                <span className='order-price'>$ 40,49</span>
                <span className='order-status'>Dine-in</span>
              </span>
            </div>
          </div>
 
  )
}

export default Orders