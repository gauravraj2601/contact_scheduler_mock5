const express= require("express");
const { User_Model } = require("../model/user.model");

const userRouter= express.Router();

userRouter.post("/contacts", async(req,res)=>{
    const {name,email, phone,label,booked_slots}=req.body;
    const contact= await User_Model.findOne({email:email})
    try {
        if(contact){
            res.status(400).send({"msg":"Contact Already with same email"})
        }
        else{
            const newContact= new User_Model({name,email, phone,label,booked_slots})
            await newContact.save();
            res.status(200).send({"msg":"New Contact is Saved"})
        }
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})

module.exports={userRouter}