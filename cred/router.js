const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoschema");

//Create
router.post("/",async(req,res)=>{
    var data = new InfoRouter({
        Name:req.body.name,
        Age:req.body.Age,
        City:req.body.City
    });
    await data.save();
    res.json(data);
})
//get all
router.get("/",async(req,res)=>{
    var findData= await InfoRouter.find();
    res.json(findData);
})
//update
router.put("/update",async(req,res)=>{
    var update=await InfoRouter.update({ id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
    res.json("I am From Router file");
})
//delete
router.delete("/del/:id",async(req,res)=>{
    var delData = await InfoRouter.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"Deleted Successfully"})
    })

})
router.get("/",(req,res)=> {
    res.json("I am from Router file");
})


module.exports = router;