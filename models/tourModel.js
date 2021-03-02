const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a tour must have name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'a tour must have duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'a tour must have maxGroupSize'],
  },
  difficulty: {
    type: String,
    required: [true, 'a tour must have difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'a tour must have price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
