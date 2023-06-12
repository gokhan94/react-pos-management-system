import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { addToCart } from "../features/cart/cartSlice";
import {
  setEditProduct,
  removeProduct,
} from "../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  productSubTotal,
  productTax,
  productTotalAmount,
} from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCart = (product) => {
    dispatch(addToCart(product));
  };

  const removeItem = (product) => {
    dispatch(removeProduct(product));
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(productSubTotal());
    dispatch(productTax());
    dispatch(productTotalAmount());
  }, [dispatch, cartItems]);

  const setEdit = (product) => {
    const { name, stock, image, price, category, user } = product;

    dispatch(
      setEditProduct({
        name,
        stock,
        image,
        price,
        category,
        user,
        editProductId: product._id,
      })
    );

    navigate("/dashboard/form");
  };

  return (
    <div className="product-cart">
      {product.image ? (
        <img className="product-image" src={product.image} alt="..." />
      ) : (
        <img
          className="default-image"
          src={require("../images/product.png")}
          alt="..."
        />
      )}

      <div className="product-cart-detail">
        <h4>{product.name}</h4>
        <p className="product-price">$ {product.price}</p>
        <span className="stock-status">
          <span className="stock">{product.stock} stock</span>
          <span className="available">available</span>
        </span>
      </div>

      <div className="add-product-cart">
        {product.stock === 0 ? (
          <div className="cart-stock">Out Of Stock</div>
        ) : (
          <button
            className="add-cart"
            type="submit"
            onClick={() => {
              addCart(product);
            }}
          >
            Add Cart
          </button>
        )}
      </div>

      {product.user.toString() === user._id && (
        <div>
          <button
            className="product-delete"
            type="button"
            onClick={() => {
              removeItem(product);
            }}
          >
            X
          </button>
          <button
            className="product-update"
            type="button"
            onClick={() => {
              setEdit(product);
            }}
          >
            <FaEdit />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
