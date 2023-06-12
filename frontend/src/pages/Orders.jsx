import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../features/order/orderSlice";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      {orders
        ? orders.map((order) => <OrderItem key={order._id} order={order} />)
        : "Loading..."}
    </>
  );
};

export default Orders;
