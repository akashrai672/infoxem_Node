const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    userName:{
        type:String,
        default:""
    },
    mobileNo:{
        type:String,
        default:""
    }
});
const user =  userSchema;
module.exports =mongoose.model ('users',user);