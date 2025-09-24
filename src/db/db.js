import mongoose from "mongoose"

const connectDb = ()=>{

    mongoose.connect(process.env.MONGODB_URI)

    .then(() =>console.log('connect to mongodb'))
    .catch(()=> console.log('error'))
      
    

              
}

export default connectDb