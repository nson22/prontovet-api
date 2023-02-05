import {Request, Response} from "express";
import {CreateUserService} from "./CreateUserService";


export class CreateUserController{

    constructor(private createUserService: CreateUserService) {
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, profile} = request.body

        await this.createUserService.execute({name, profile})

        return response.status(201).send()
    }
}