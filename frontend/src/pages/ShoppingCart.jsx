import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  increase,
  decrease,
  productSubTotal,
  productTotalAmount,
  productTax,
  removeCartItem,
} from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const ShoppingCart = () => {
  const { cartItems, subTotal, totalAmount, tax } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productSubTotal());
    dispatch(productTax());
    dispatch(productTotalAmount());
  }, [dispatch, cartItems]);

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-title">
          <span>Cart Items</span>
          <span>Cart Table</span>
        </div>

        <div className="cart-number">
          <h3># {cartItems && cartItems.length}</h3>
          <h3>T1</h3>
        </div>
      </div>

      <div className="cart-empty">
        {cartItems.length === 0 && (
          <div className="cart-title">
            <span>There are no products in the cart.</span>
          </div>
        )}
      </div>

      {cartItems ? (
        cartItems.map((cart) => (
          <div className="cart-items" key={cart.id}>
            <div className="image">
              {cart.image ? (
                <img className="product-image" src={cart.image} alt="..." />
              ) : (
                <img
                  className="default-image"
                  src={require("../images/product.png")}
                  alt="..."
                />
              )}
            </div>

            <div className="info">
              <h4>{cart.name}</h4>

              <button
                className="remove-item"
                type="button"
                onClick={() => {
                  dispatch(removeCartItem(cart.id));
                }}
              >
                X
              </button>

              <div className="details">
                <div className="status">
                  <span className="status-note">Category:</span>
                  <p className="status-text">{cart.category}</p>
                </div>

                <div className="price">
                  <p>$ {cart.price}</p>
                </div>

                <div className="count">
                  <button
                    className="increment-btn"
                    type="button"
                    onClick={() => {
                      dispatch(increase(cart.id));
                    }}
                  >
                    +
                  </button>
                  <span className="amount">{cart.quantity}</span>
                  <button
                    className="decrement-btn"
                    type="button"
                    onClick={() => {
                      dispatch(decrease(cart.id));
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Products Loading...</div>
      )}

      <div className="total-card">
        <div className="total-items">
          <span className="items-count">Items ({cartItems.length})</span>
          <span className="items-price">$ {subTotal.toFixed(2)}</span>
        </div>
        <div className="item-taxs">
          <span className="item-tax">Tax (%8)</span>
          <span className="item-tax-price">$ {tax.toFixed(2)}</span>
        </div>
        <div className="divider"></div>
        <div className="total">
          <span className="total-text">Total </span>
          <span className="total-item-price">$ {totalAmount.toFixed(2)}</span>
        </div>

        <div className="pay">
          <button className="pay-btn" onClick={() => navigate("/cart")}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
