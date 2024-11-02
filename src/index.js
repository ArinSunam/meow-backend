import dotenv from "dotenv";
dotenv.config({
  path: './.env'
})

import connectDB from "./db/index.js";
import { app } from "./app.js";

// console.log("meow index file", process.env.CLOUDINARY_CLOUD_NAME)
// console.log("Cloduinar cloud name index file", process.env.CLOUDINARY_API_KEY)




connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("Mongodb connection failed!!!", err)
  })
