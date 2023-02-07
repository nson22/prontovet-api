import { Request, Response, Router } from "express"
import {createEmployersController} from "../modules/employers/services/create";
import {listEmployersController} from "../modules/employers/services/list";
import {deleteEmployersController} from "../modules/employers/services/delete";
import {updateEmployersController} from "../modules/employers/services/update";
import {findEmployerByIdController} from "../modules/employers/services/findById";

export const employersRoute = Router()

employersRoute.post("/",(request: Request, response: Response) => {
    return createEmployersController.handle(request, response)
})

employersRoute.get("/",(request: Request, response: Response) => {
    return listEmployersController.handle(request, response)
})

employersRoute.delete("/:id", (request: Request, response: Response) => {
    return deleteEmployersController.handle(request, response)
})

employersRoute.put("/:id", (request: Request, response: Response) => {
    return updateEmployersController.handle(request, response)
})

employersRoute.get("/:id",(request: Request, response: Response) => {
    return  findEmployerByIdController.handle(request, response)
})
