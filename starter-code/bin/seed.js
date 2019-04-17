onst mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = 'libraryCoffe';
mongoose.connect(`mongodb://localhost/${dbName}`);
const place = [{
    name: "Bulldog Coffe",
    type: "coffeshop",
    latitude: 52.396921,
    longitude: 4.847504
  },
  {
    name: "Casa Pepe",
    type: "bookshop",
    latitude: 40.472274,
    longitude: -3.713781

  },
  {
    name: "Blablabla",
    type: "bookshop",
    latitude: 52.396921,
    longitude: 4.847504
  }
]




Place.create(place, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`create ${place.length} place`)
  mongoose.connection.close();
})