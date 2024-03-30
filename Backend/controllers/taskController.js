const Task=require("../models/Task")
const ErrorResponse = require("../utils/errorResponse");

const {createTask,deleteTask,updateTask,getAllTasks,getAllTaskFolder,getTask,filterTaskByCompleted,filterTaskByDate,completeTask,getAllTaskCompleted}=require("../service/tasksServices")


//creation d'une tache 

exports.createtask=async (req, res, next)=> {

    const {title,description,complete,date,password}=req.body
    console.log(title)

    try {
        createTask(title,description,complete,date,password)
        res.status(201).send({message:"task created"})
    }catch (error){
        next(error)
    }
};

//suppression d'une tache 

exports.deletetask=async (req, res, next)=> {

    const {title}=req.body
    console.log(title)

    try {
        deleteTask(title)
        res.status(201).send({message:"task deleted"})
    }catch (error){
        next(error)
    }
};


//update Task


exports.updatetask=async (req, res, next)=> {

    const {title,description,complete,date}=req.body
    console.log(title)

    try {
        updateTask(title,description,complete,date)
        res.status(201).send({message:"task update"})
    }catch (error){
        next(error)
    }
};

//get Task

exports.gettask=async (req, res, next)=> {

    const {title}=req.body

    try {
        getTask(title)
        res.status(201).send({message:"read  task "})
    }catch (error){
        next(error)
    }
};


//getAlll Task


exports.getalltask=async (req, res, next)=> {
    try {
        getAllTasks()
        res.status(201).send({message:"read all tasks "})
    }catch (error){
        next(error)
    }
};


//getAllTaskFolder

exports.getallstackfolder=async (req,res,next)=>{

    const {folder_name}=req.body
    try {
        getAllTaskFolder(folder_name);
        res.status(200).send ({message:"read all task for folder"})
        
    }catch (error){
        next(error)
    }
}



//complete task 

exports.completetask=async (req,res,next)=>{
    
const {title}=req.body
console.log(title)

try {
    completeTask(title)
    res.status(201).send({message:"task complete"})
}catch (error){
    next(error)
}

}

// get all task completed 

exports.getallstackcompleted=async (req,res,next)=>{


    try {
        getAllTaskCompleted()
        res.status(200).send ({message:"read all task completed"})
        
    }catch (error){
        next(error)
    }
}