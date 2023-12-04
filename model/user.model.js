const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    label:String,
    booked_slots:Array
},{
    versionKey:false
})

const User_Model= mongoose.model("users", userSchema)

module.exports={
    User_Model
}