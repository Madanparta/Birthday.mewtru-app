// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    customeEnd:{
        type:String,
        require:true
    },
    totalUserCount:{
        type:String,
    }
},{timestamps:true});

const UserDb = mongoose.model('UserDb',userSchema);

// export default UserDb;
module.exports = UserDb;