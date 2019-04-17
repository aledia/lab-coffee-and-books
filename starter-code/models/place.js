const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ["coffeshop", "bookshop"],
  },
  latitude: Number,
  longitude: Number,
  // coordinates: [Number]

}, {
  timestamps: true
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;