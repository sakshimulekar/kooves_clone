const mongoose = require('mongoose');

// Define the schema for the "men's footwear" collection
const menSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  gender: String,
  sizes: {type:String,enum:['S','M','L','XL','XXL' ]},
  description: String,
  categories: {type:String,enum:["tshirt","short","kurta","shirt","shoes"]},
  brand: {type:String,enum:["Roadster","HRX","Technosport","Huetrap","Dressberry","Puma","KALINI","H&M","HERE&NOW","Street Armor by Pantaloons","indus route by Pantaloons","Allen Solly","HRX by Hrithik Roshan","Louis Philippe","Difference of Opinion","Minions by Kook N Keech","Clovia","Mast & Harbour","Celfie Design"]},
  color: {type:String,enum:["white","black","red","pink","purple","grey","blue","green","yellow"]},
  discount: String,
  off_price: Number,
  images: {
    image1: String,
    image2: String,
    image3: String,
    image4:String
  },
  rating: Number,
  count: Number
});

// Define the schema for the "women's clothing" collection
const womenSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  quantity: Number,
  gender: String,
  sizes: [String],
  description: String,
  category: String,
  brand: String,
  color: String,
  discount: String,
  off_price: Number,
  images: {
    image1: String,
    image2: String,
    image3: String,
    image4: String
  },
  rating: Number,
  count: Number
});

// Define the schema for the "girls t-shirt" collection
const kidsSchema = new mongoose.Schema({
  rating: Number,
  count: Number,
  images: {
    image1: String,
    image2: String,
    image3: String,
    image4: String
  },
  image: String,
  brand: String,
  title: String,
  sizes: [String],
  price: Number,
  id: Number,
  productDiscountPercentage: String,
  quantity: Number,
  gender: String,
  category: String
});

// Create models based on the defined schemas
const MenwishlistModel = mongoose.model('menwishlist',menSchema);
const WomenWishModel = mongoose.model('womenwishlist', womenSchema);
const KidsWishModel = mongoose.model('kidswishlist', kidsSchema);

module.exports={
    MenwishlistModel,
    WomenWishModel,
    KidsWishModel
}