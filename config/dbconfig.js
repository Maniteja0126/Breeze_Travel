const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // await mongoose.connect('mongodb://localhost:27017/TravelAppDB', { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoose.connect(process.env.DATABASE_URI,{
            useNewUrlParser: true,
            useUnifiedTopology :true ,
    })
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;