import express from 'express'
import { dbconnection } from './Mongoose.js'
import { userserver } from './registerapi.js'
import cors from "cors";
let server = express()
server.use(express.json())
server.use(cors());
let port = 7777
server.use("/", userserver)
await dbconnection();
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})