import {Request, Response} from "express";
import {CreateEmployerService} from "./CreateEmployerService";

export class CreateEmployerController {

    constructor(private createUserService: CreateEmployerService) { }

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, password} = request.body

        const employer = await this.createUserService.execute({name, password} )

        return response.status(201).json({employer: employer})
    }
}