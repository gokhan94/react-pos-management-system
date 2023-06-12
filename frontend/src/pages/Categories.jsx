import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/category/categorySlice";
import CategoryItem from "../components/CategoryItem";
import ScaleLoader from "react-spinners/ScaleLoader";

const Categories = () => {
  const { loading, categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  if (loading) {
    return <ScaleLoader color="#ecc20e" cssOverride={override} />;
  }

  return (
    <div className="category-menu">
      <ul>
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
