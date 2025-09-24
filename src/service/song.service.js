import ImageKit from "imagekit";


const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_END_POINT
});
  
const uploadFile = (file)=>{
    return new Promise((res,rej)=>{
         imagekit.upload({
            file: file.buffer,
            fileName:"moody_player"
        
         }, (error,result)=>{
            if(error){
                rej(error);
            }
            else{
                res(result);
            }

         })
    })
   
}

export default uploadFile;