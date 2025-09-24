import express, { Router } from "express";
import multer from 'multer'
import uploadFile from '../service/song.service.js'
import songModel from '../models/song.model.js'

const upload = multer({storage:multer.memoryStorage()})

const router = express.Router();


router.post('/uploadsongs',upload.single('audio'),async(req,res)=>{
    const{title, mood} = req.body
    const fileData = await uploadFile(req.file)
    const songs = await songModel.create ({
            audio: fileData.url ,
            mood: mood,
            title: title
    })
    console.log(fileData.url)
    res.status(201).json({
        message: 'success',
        song: songs
    })
})
router.get('/getsongs', async(req,res)=>{
    const songs = await songModel.find()
    res.status(200).json({
        message: 'success',
        songs: songs
    })

})
export default router

