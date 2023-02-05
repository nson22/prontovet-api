import {Request, Response, Router} from "express"
import {createUserController} from "../modules/user/services/create";
import { listUsersController } from "../modules/user/services/list";

export const usersRoutes = Router()

usersRoutes.post("/",(request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

usersRoutes.get("/",(request: Request, response: Response) => {
    return  listUsersController .handle(request, response)
})
