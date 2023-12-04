const express= require("express");
const { User_Model } = require("../model/user.model");

const userRouter= express.Router();
userRouter.post("/addcontacts/", async(req,res)=>{
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
userRouter.get("/contacts", async(req,res)=>{
    try {
        let contacts= await User_Model.find()
        res.status(200).send(contacts)
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})


// userRouter.delete("/delete/:id",async(req,res)=>{
//     let {id}= req.params.id;
//     try {
//         const toDeleteContact= await User_Model.finById(id);
//         if(!toDeleteContact){
//             throw new Error("Contact not found")
//         }
//         await User_Model.findByIdAndDelete(id)
//         res.status(200).send({"msg":"Post Deleted"})
//     } catch (error) {
//         res.status(400).send({"error":error.message})
//     }
// })

// userRouter.patch("/edit/:id",async(req,res)=>{
//     let {id}= req.params.id;
//     const {name,email, phone,label,booked_slots}=req.body;

//     try {
//         const editContact= await User_Model.finById(id);
//         console.log(editContact)
//         if(!editContact){
//             throw new Error("Contact not found")
//         }
//         await User_Model.findByIdAndUpdate(req.params.id,{name,email, phone,label,booked_slots})
//         res.status(200).send({"msg":"Post Updated "})
//     } catch (error) {
//         res.status(400).send({"error":error.message})
//     }
// })

module.exports={userRouter}