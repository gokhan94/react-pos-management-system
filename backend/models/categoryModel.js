const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model('Category', CategorySchema);