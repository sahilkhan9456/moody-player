import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    audio: String,
    mood: String,
    title: String
})


const songModel = mongoose.model('song', songSchema);

export default songModel;