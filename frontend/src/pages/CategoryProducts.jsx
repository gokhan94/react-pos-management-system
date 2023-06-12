import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { categoryProductFilter } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import ClipLoader from "react-spinners/ClipLoader";

const ProductCategory = () => {
  let { category } = useParams();
  const dispatch = useDispatch();

  const { loading, filterProduct } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(categoryProductFilter({ category }));
  }, [dispatch, category]);

  const addCart = (product) => {
    dispatch(addToCart(product));
  };

  const override = {
    display: "block",
    margin: "0 auto",
  };

  if (loading) {
    return <ClipLoader size={60} color="#ecc20e" cssOverride={override} />;
  }

  if (filterProduct.length === 0) {
    return (
      <div className="info-details">
        <div className="info">No products found in the category...</div>
      </div>
    );
  }

  return (
    <>
      <div className="products-title">
        <h1 className="products">
          Category ({filterProduct.length}) : {category}
        </h1>
      </div>

      <div className="product-content">
        {filterProduct.map((product) => (
          <div key={product._id} className="product-cart">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
