const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.dburl;
async function connect(){
    try{
         mongoose.connect(url,{});
        console.log("Database connected successfully");
    }catch(err){
        console.log("Database connection failed",err);
    }
}
// "mongodb://localhost:27017/urlShortner"
module.exports = connect;