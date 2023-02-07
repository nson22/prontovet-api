
import express, {NextFunction, Request, Response} from "express"
import * as dotenv from 'dotenv'
import { employersRoute } from "./routes/employersRoute";
import {ServerError} from "./modules/error/ServerError";
dotenv.config()

const server = express()
const PORT = process.env.PORT

server.use(express.json())

server.use("/employers", employersRoute)

server.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof ServerError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

server.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})