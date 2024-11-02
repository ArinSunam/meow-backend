import dotenv from "dotenv";
dotenv.config()
import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})




const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null

    //upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })
    //file has been uploaded sucess
    // console.log("file is uploaded on cloudinary", response)
    fs.unlinkSync(localFilePath)
    return response;

  } catch (error) {
    console.log("cloudinary error:", error)
    fs.unlink(localFilePath, (err) => {
      if (err) console.error("Error deleting file:", err)
    })//remove  the locally saved temporary file as the upload failed
    return null;
  }
}
// console.log("meow cloud file", process.env.CLOUDINARY_CLOUD_NAME)
// console.log("Cloduinar cloud name cloud file", process.env.CLOUDINARY_API_KEY)


export { uploadOnCloudinary }