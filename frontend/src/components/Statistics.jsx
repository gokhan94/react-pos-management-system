import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../features/order/orderSlice";
import { allUsers } from "../features/auth/authSlice";

const Statistics = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const { orders } = useSelector((state) => state.order);
  const { users } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getOrders());
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <>
      <div className="statistic-layout">
        <div className="statistics">
          <span className="statistic-title">Orders</span>
          <div className="statistic-count">
            <div className="image">
              <img src={require("../images/order.png")} alt="..." />
            </div>
            <span>{orders.length}</span>
          </div>
        </div>

        <div className="statistics">
          <span className="statistic-title">Users</span>
          <div className="statistic-count">
            <div className="image">
              <img src={require("../images/users.png")} alt="..." />
            </div>
            <span>{users.length}</span>
          </div>
        </div>

        <div className="statistics">
          <span className="statistic-title">Products</span>
          <div className="statistic-count">
            <div className="image">
              <img src={require("../images/products.png")} alt="..." />
            </div>
            <span>{products.length}</span>
          </div>
        </div>

        <div className="statistics">
          <span className="statistic-title">Categories</span>
          <div className="statistic-count">
            <div className="image">
              <img src={require("../images/category.png")} alt="..." />
            </div>
            <span>{categories.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
