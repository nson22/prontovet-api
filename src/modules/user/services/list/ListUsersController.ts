import { Request, Response} from "express"
import {ListUsersService} from "./ListUsersService";

export class ListUsersController {
    constructor(private listUserService: ListUsersService) {
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const users = await this.listUserService.execute()

        return response.status(200).json(users)
    }
}