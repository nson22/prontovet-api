import express, {Request, Response} from "express"
import * as dotenv from 'dotenv'
dotenv.config()

const server = express()
const PORT = process.env.PORT

server.get("/", (request: Request, response: Response) => {
    return response.send({message: "ProntoVet - API"})
})

server.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})