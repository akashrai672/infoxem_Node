const mongoose = require("mongoose");
class db {
    constructor(){
        this.connection();
    }
    connection(){
        mongoose.connect('127.0.0.1/infoxen',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },()=>{
            console.log("DatabAse Connected SuccessFully");
        })
    }
}
module.exports = new db();