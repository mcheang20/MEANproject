'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  productName: {
    type: String,
    default: '',
    required: 'Please fill product name',
    trim: true
  },
  price: {
    type: Number,
    default: '',
    required: 'Please add product price',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill product description',
    trim: true
  },
  condition: {
    type: String,
    default: '',
    required: 'Please fill product condition',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Product', ProductSchema);
