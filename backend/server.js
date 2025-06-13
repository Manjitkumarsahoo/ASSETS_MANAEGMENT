import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import dbConnect from "./config/dbConfig.js"
import adminRouter from "./routes/adminRouter.js"
import assetRouter from "./routes/assetRouter.js"
import employeeRouter from "./routes/employeeRouter.js"
import adminAuthRouter from "./routes/auth/adminAuthRouter.js"
import employeeAuthRouter from "./routes/auth/employeeAuthRouter.js"
import errorHandler from "./middlewares/errorHandling.js"

//dotenv configuration
import { config } from "dotenv"
config()

//server declaration
const app = express()


//demo
app.get("/",(req,res)=>res.send({message:"server is working"}));


//middleware
app.use(express.json())      //json parser
app.use(express.urlencoded({ extended: true }))    //url data parser
app.use(cookieParser())    //cookie data parser
app.use(cors())  //cors policy resolve
app.use(morgan("dev"))   //http logger

//routes
app.use("/api/admin",adminRouter)    //assign assets or update  to employee
app.use("/api/asset",assetRouter)    //add or update assets to company
app.use("/api/employee",employeeRouter)     //add employee by admin
app.use("/api/auth/admin",adminAuthRouter)   //admin login
app.use("/api/auth/employee",employeeAuthRouter)  //employee login

//error Handling
app.use(errorHandler)
//db connection
dbConnect()


//server listening
const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
    console.log("server is runing in port " + port);
})