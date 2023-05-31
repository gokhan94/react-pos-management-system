import React from 'react'
import OrderPrint from '../components/OrderPrint'

const OrderItem = ({ order }) => {
    return (
              <div className='order-details' key={order._id}>
              <div className='order-title'>

                  <span className='order-id'>Order Id: # {order._id}</span>
                  <span className='order-time'> Customer: {order.customer} </span>
              </div>

                    <div className='order-total'>
                      <span className='qta'>Sold : {order.cartItems.reduce((prev, cur) => { return prev + cur.quantity }, 0)}</span>
                      
                      <span className='order-price-detail'>
                      <span className='order-price'>$ {order.totalAmount}</span>
                    
                        <OrderPrint order={order} />
                      </span>
        </div>
        </div>   
  )
}

export default OrderItem