import { Request, Response} from "express"
import {ListEmployersService} from "./ListEmployersService";

export class ListEmployersController {
    constructor(private listUserService: ListEmployersService) {
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const employers = await this.listUserService.execute()

        return response.status(200).json({employers: employers})
    }
}