import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/category/categorySlice";
import {
  productCreate,
  handleChange,
  clearValues,
  editProduct,
} from "../features/product/productSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    name,
    stock,
    image,
    price,
    category,
    user,
    isEditing,
    editProductId,
  } = useSelector((store) => store.product);
  const { categories } = useSelector((store) => store.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !stock || !price || !category) {
      toast.warning("An error occurred while updating the product");
      return;
    }

    if (isEditing) {
      dispatch(
        editProduct({
          product: {
            id: editProductId,
            name,
            stock,
            image,
            price,
            category,
            user,
          },
        })
      );
      dispatch(clearValues());
      return;
    }
    dispatch(productCreate({ name, stock, image, price, category }));
    dispatch(clearValues());
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <button className="exit" onClick={() => dispatch(clearValues())}>
          X
        </button>
        <div className="add-form">
          <h1 className="new-product">
            {isEditing ? "Edit Product" : "New Product"}
          </h1>
        </div>

        <div className="form-input">
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <input
            type="number"
            placeholder="Stock"
            name="stock"
            value={stock}
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            placeholder="Product Image Link"
            name="image"
            value={image}
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <select
            className="select-category"
            name="category"
            onChange={onChange}
          >
            <option value="Select Category">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.category}>
                {c.category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-input">
          {isEditing ? (
            <button className="product-btn">Edit Product</button>
          ) : (
            <button className="product-btn">Add Product</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
