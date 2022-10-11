const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  reqNo: {
    type: String,
    required: true,
  },

  itemCode: {
    type: String,
    required: true,
  },

  itemQty: {
    type: Number,
  },

  Cost: {
    type: Number,
    
  },

  tCost: {
    type: Number,
  },
});

const Product = mongoose.model("StoreItem", ItemSchema);

module.exports = Product;
