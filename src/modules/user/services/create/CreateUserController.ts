import {Request, Response} from "express";
import {CreateUserService} from "./CreateUserService";


export class CreateUserController{

    constructor(private createUserService: CreateUserService) {
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, profile, password} = request.body

        await this.createUserService.execute({name, profile, password})

        return response.status(201).send()
    }
}