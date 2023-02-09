import { Request, Response, Router } from "express"
import {createEmployersController} from "../employers/services/create";
import {listEmployersController} from "../employers/services/list";
import {deleteEmployersController} from "../employers/services/delete";
import {updateEmployersController} from "../employers/services/update";
import {findEmployerByIdController} from "../employers/services/findById";
import {resetPasswordController} from "../employers/services/password";

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

employersRoute.patch("/:id", (request: Request, response: Response) => {
    return resetPasswordController.handle(request, response)
})
