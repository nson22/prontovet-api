import {Request, Response} from "express";
import {FindEmployerByIdService} from "./FindEmployerByIdService";

export class FindEmployerByIdController {

    constructor(private findEmployerByIdService: FindEmployerByIdService) {
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        const employer = await this.findEmployerByIdService.execute(id)

        return response.status(200).json({employer: employer})
    }
}