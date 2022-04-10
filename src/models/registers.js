const mongoose = require("mongoose")

const regSchema =  new mongoose.Schema({
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    phone: {
        type : Number,
        required: true,
        unique:true
    },
    email : {
        type : String,
        required: true,
        unique:true
    },
    password : {
        type : String,
        required: true
    },
    repassword : {
        type : String,
        required: true
    }
})
const Register = new  mongoose.model("Register" , regSchema);
module.exports = Register;