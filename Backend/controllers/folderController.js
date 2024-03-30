const Folder=require("../models/Folder")
const ErrorResponse = require("../utils/errorResponse");


const {createFolderTask,getFolderByName,updateFolderByName,getAllFolder, deleteFolder}=require("../service/FolderServices")

 

//creation d'un folder 

exports.createfolder=async (req, res, next)=> {

    const {folder_name}=req.body
    console.log(folder_name)

    try {
        createFolderTask(folder_name)
        res.status(201).send({message:"folder created"})
    }catch (error){
        next(error)
    }
};


//suppression d'un folder 

exports.deletefolder=async (req, res, next)=> {

    const {folder_name}=req.body
    console.log(folder_name)

    try {
        deleteFolder(folder_name)
        res.status(201).send({message:"task deleted"})
    }catch (error){
        next(error)
    }
};


// update d'un folder 



exports.updatefolder=async (req, res, next)=> {

    const {folder_name}=req.body
    console.log(folder_name)

    try {
        updateFolderByName(folder_name)
        res.status(201).send({message:"folder update"})
    }catch (error){
        next(error)
    }
};


//get folder

exports.getfolder=async (req, res, next)=> {

    const {folder_name}=req.body

    try {
        getFolderByName(folder_name)
        res.status(201).send({message:"read  folder "})
    }catch (error){
        next(error)
    }
};

//get all folder 


exports.getallfolder=async (req, res,next) => {


    try {
        getAllFolder()
       
        getAllFolder()
        .then(folders => {
        JSON.stringify(folders);
        res.status(201).send({folders})
        console.log(folders)
     })
    }catch (error){
        next(error)
    }
    
}