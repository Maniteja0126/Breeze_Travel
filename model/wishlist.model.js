const mongoose = require('mongoose')
const router = require('../routes/dataimport.router')

const wishlistSchema = new mongoose.Schema({
    hotelId: {type:String, required: true}
})

const Wishlist = mongoose.model("wishlist",wishlistSchema)




module.exports = Wishlist