import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
    return (
    
    <div>

    <div className='cart-container'>
      <header className='cart-header'>
          <a href='/' className='logo'>Shopping Cart</a>
          <ul className='navigation'>
              <li><a className='nav-link' href='/'>Home</a></li>
              <li><a className='nav-link' href='/'>Users</a></li>
              <li><a className='nav-link' href='/'>Products</a></li>
              <li><a className='nav-link' href='/'>Cart</a></li>
          </ul>
        </header>
    </div>
            
    <div id='shop-container'>
                
        <section id='cart'>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                        <tr>
                            <td>
                                <a><FaTimes /></a>
                            </td>
                            <td>
                                <img src={require('../images/hamburger.png')} alt='...' />
                            </td>
                            <td>
                                Product Name
                            </td>
                            <td>
                                $ 18
                            </td>
                            <td><input type='number'></input></td>
                            <td>$ 115</td>
                        </tr>   
                                                <tr>
                            <td>
                                <a><FaTimes /></a>
                            </td>
                            <td>
                                 <img src={require('../images/hamburger.png')} alt='...'/>       
                            </td>
                            <td>
                                Product Name
                            </td>
                            <td>
                                $ 18
                            </td>
                            <td><input type='number'></input></td>
                            <td>$ 115</td>
                        </tr>  
                                                <tr>
                            <td>
                                <a><FaTimes /></a>
                            </td>
                            <td>
                                 <img src={require('../images/hamburger.png')} alt='...'/>       
                            </td>
                            <td>
                                Product Name
                            </td>
                            <td>
                                $ 18
                            </td>
                            <td><input className='qty-number' type='number'></input></td>
                            <td>$ 115,66</td>
                        </tr>  
            </tbody>       
        </table>   


                
        </section>

            
        <div className='cart-summary styled'>
            <div className='item'>
                <div className='coupon'>
                    <input className='input-coupon' type='text' placeholder='enter cupon' />
                    <button>Apply</button>
                </div>  
                    <div className='shipping-rate collapse'>
                        <div className='has-child expand'>
                                <a href='/'>SHIPPING TAX AND ESTIMATE</a>
                                <div className='content'>
                                    <div className='countries'>
                                        <form>
                                            <label htmlFor="country">Country</label>
                                            <select name='country' id='country'>
                                                <option value="1">ABD</option>
                                                <option value="1">Albenia</option>
                                                <option value="1">Others</option>
                                                
                                            </select>
                                        </form>
                                    </div>
                                     <div className='states'>
                                        <form>
                                            <label htmlFor="state">State / Province</label>
                                            <select name='country' id='country'>
                                                <option value="1">ABD</option>
                                                <option value="1">Albenia</option>
                                                <option value="1">Others</option>
                                                
                                            </select>
                                        </form>
                                    </div>
                                    <div className='postal-code'>
                                        <form>
                                            <label htmlFor="postal">Zipcode</label>
                                            <input type='number' name='postal' id='postal'/>
                                        </form>  
                                    </div>

                                </div>
                         </div>     
                    </div>  
                    <div className='cart-total-table'>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>$21215</td>
                                    </tr>
                                    <tr>
                                        <th>Tax</th>
                                        <td>$20</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping</th>
                                        <td>$10</td>
                                    </tr>
                                    <tr className='grand-total'>
                                        <th>TOTAL</th>
                                        <td><strong>$2065,95</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='secondary-button'>
                                <button type='submit'>Checkout</button>  
                            </div> 
                    </div>        
            </div>
        </div>

    </div>
        

         
            
    </div>

  )
}

export default Cart
