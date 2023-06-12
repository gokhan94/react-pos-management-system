const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
  {
    customer: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    zipcode: {
      type: Number,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    cartItems: [],
    subTotal: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    payment: {
      type: String,
      require: true 
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);