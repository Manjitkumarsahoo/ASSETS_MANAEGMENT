import express from "express"
import { adminVerify } from "../middlewares/adminVerify.js"
import { addEmployee } from "../controllers/employeeController.js"

const employeeRouter = express.Router()


//add employee
employeeRouter.post("/add", adminVerify, addEmployee)




export default employeeRouter