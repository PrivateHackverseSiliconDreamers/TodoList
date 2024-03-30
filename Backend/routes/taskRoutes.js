const express = require ("express")
const router=express.Router()



const { createtask, deletetask, updatetask, gettask, getalltask, getallstackfolder, completetask, getallstackcompleted }=require ("../controllers/taskController");
const { getAllTaskFolder } = require("../service/tasksServices");


router.route("/create").post(createtask)
router.route("/delete").post(deletetask)
router.route("/update").post(updatetask)
router.route("get").post(gettask)
router.route("/getAll").post(getalltask)
router.route("/getAllfolder").post(getallstackfolder)
router.route("/completeTask").post(completetask)
router.route("/getAllTaskComplete").post(getallstackcompleted)


router.use ("/",(req,res,next)=>{

    res.status(404).json({error:"page not found "})
})

module.exports=router;
