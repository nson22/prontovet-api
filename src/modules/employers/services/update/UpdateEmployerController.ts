import {UpdateEmployerService} from "./UpdateEmployerService";
import {Request, Response} from "express";

export class UpdateEmployerController {
    constructor(private updateUserService: UpdateEmployerService) {
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params
        const { name, password } = request.body

        await this.updateUserService.execute({id, name, password})

        return response.status(200).send()
    }
}