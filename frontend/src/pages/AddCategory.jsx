import { useDispatch, useSelector } from "react-redux";
import {
  categoryCreate,
  handleChange,
  clearValues,
} from "../features/category/categorySlice";
import { toast } from "react-toastify";

const AddCategory = ({ closeModal }) => {
  const { category, image } = useSelector((store) => store.category);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      toast.error("category error");
      return;
    } else {
      dispatch(categoryCreate({ category, image }));
      dispatch(clearValues());
    }
  };

  const onChange = (e) => {
    //setCategory({ ...addCategory, [e.target.name]: e.target.value })
    const name = e.target.name;
    const value = e.target.value.replace(/\s+/g, "-").toLowerCase();

    dispatch(handleChange({ name, value }));
  };

  return (
    <div className="form-container">
      <form className="form category-form" onSubmit={handleSubmit}>
        <button className="exit" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="add-form">
          <h1 className="new-product">Add Category</h1>
        </div>
        <div className="form-input">
          <input
            type="name"
            placeholder="Category Name"
            name="category"
            value={category}
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <input
            type="name"
            placeholder="Category Image"
            name="image"
            value={image}
            onChange={onChange}
          />
        </div>

        <div className="form-input">
          <button className="product-btn">Add Category</button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
