let mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name: {type :String},
    role: {type :Number},
    email: {type :String},
    phoneNumber: {type :Number},
})

let userModel = mongoose.model("user",userSchema)

 module.exports={userModel}