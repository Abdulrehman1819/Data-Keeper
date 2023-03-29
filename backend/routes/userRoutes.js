const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/userModel");
router.get("/getusers", async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
  }
});
router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const userdata = User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userdata);
  } catch (e) {
    res.status(400).json(e.message);
    // console.log(e);
  }
});
router.get("/getsingleuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById({ _id: id });
    console.log(user);
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
  }
});
router.get("/deluser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete({ _id: id });
if(user){
   
}
else{
    return res.status(201).json("No Such User Exists")
}
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
  }
});
router.patch("/update/:id",async (req,res)=>{
    try{
        const {id}=req.params;
        // const {name,email,age}=req.body;
        const updatedUser=await User.findByIdAndUpdate(id,{name:req.body.name,email:req.body.email,age:req.body.age},{new:true})
        res.status(200).json({
            updatedUser
        })
    }
    catch(e){
        res.status(400).json(e.message);
    }
})
module.exports = router;
