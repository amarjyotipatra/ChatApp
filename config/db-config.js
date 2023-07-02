const mongoose=require('mongoose');
const { DB_URL } = require('./server-config')
require('dotenv').config();

async function connect(){
    await mongoose.connect(DB_URL);
}

module.exports=connect;