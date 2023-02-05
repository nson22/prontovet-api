import express from "express"
import * as dotenv from 'dotenv'
import {usersRoutes} from "./routes/users.routes";
dotenv.config()

const server = express()
const PORT = process.env.PORT

server.use(express.json())

server.use("/users", usersRoutes)

server.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})