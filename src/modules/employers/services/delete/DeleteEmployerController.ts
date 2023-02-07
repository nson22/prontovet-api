import {Request, Response} from "express";
import {DeleteEmployerService} from "./DeleteEmployerService";

export class DeleteEmployerController {
    constructor(private deleteUserService: DeleteEmployerService) { }

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        await this.deleteUserService.execute(id)

        return response.status(200).send()
    }
}