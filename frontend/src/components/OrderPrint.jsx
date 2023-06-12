import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const OrderPrint = ({ order }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => alert("print success"),
  });

  return (
    <>
      <div style={{ display: "none" }}>
        <div ref={componentRef} style={{ width: "100%", height: "100vh" }}>
          <div className="invoice">
            <div className="invoice_left">
              <div className="i_logo">
                <p>GK Market</p>
              </div>
              <div className="i_to">
                <div className="main_title">
                  <p>Customer Detail</p>
                  <div className="divline"></div>
                </div>

                <div className="p_title">
                  <div>
                    <span className="c_detail">Customer: </span>
                    <span className="c_title">{order.customer}</span>
                  </div>
                </div>

                <div className="p_title">
                  <div>
                    <span className="c_detail">Phone: </span>
                    <span className="c_title">{order.phone}</span>
                  </div>
                </div>
                <div className="p_title">
                  <p className="c_detail">
                    {order.country}, {order.province}
                  </p>
                </div>
              </div>
              <div className="i_details">
                <div className="main_title">
                  <p>Order details</p>
                  <div className="divline"></div>
                </div>
                <div className="p_title">
                  <p className="o_name">Order No:</p>
                  <span className="o_detail">{order._id}</span>
                </div>
                <div className="p_title">
                  <p className="o_name">Order Date:</p>
                  <span className="o_detail">{order.createdAt}</span>
                </div>
              </div>
              <div className="i_payment">
                <div className="main_title">
                  <p>Payment Method</p>
                  <div className="divline"></div>
                </div>
                <div className="p_title">
                  <p className="c_detail">Payment Method:</p>
                  <span className="o_detail">{order.payment}</span>
                </div>
              </div>
            </div>
            <div className="invoice_right">
              <div className="title">
                <p>INVOICE</p>
                <div className="divline"></div>
              </div>
              <div className="i_table">
                <div className="i_table_head">
                  <div className="i_row">
                    <div className="i_col w_55">
                      <p className="p_title">PRODUCT NAME</p>
                    </div>
                    <div className="i_col w_15 text_center">
                      <p className="p_title">QUANTITY</p>
                    </div>
                    <div className="i_col w_15 text_center">
                      <p className="p_title">PRICE</p>
                    </div>
                    <div className="i_col w_15 text_right">
                      <p className="p_title">TOTAL</p>
                    </div>
                  </div>
                </div>
                <div className="i_table_body">
                  {order.cartItems.map((item) => (
                    <div key={item._id} className="i_row">
                      <div className="i_col w_55">
                        <p>{item.name}</p>
                      </div>
                      <div className="i_col w_15 text_center">
                        <p>{item.quantity}</p>
                      </div>
                      <div className="i_col w_15 text_center">
                        <p>$ {item.price}</p>
                      </div>
                      <div className="i_col w_15 text_right">
                        <p>$ {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="i_table_foot">
                  <div className="i_row">
                    <div className="i_col w_50">
                      <p>Sub Total:</p>
                      <p>Tax 8%:</p>
                      <p>TOTAL:</p>
                    </div>
                    <div className="i_col w_50 text_right">
                      <p>$ {order.subTotal}</p>
                      <p>${order.tax}</p>
                      <p>${order.totalAmount}</p>
                    </div>
                  </div>
                  <div className="i_row grand_total_wrap">
                    <div className="i_col w_50">
                      <p>GRAND TOTAL:</p>
                    </div>
                    <div className="i_col w_50 text_right">
                      <p>${order.totalAmount}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="terms">
                <div className="main_title">
                  <p>Thank You</p>
                  <div className="divline"></div>
                </div>
                <p>YOUR ORDER IS MADE. THANK YOU FOR SHOPPING FROM US.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="order-status" onClick={handlePrint}>
        {" "}
        Print{" "}
      </button>
    </>
  );
};

export default OrderPrint;
