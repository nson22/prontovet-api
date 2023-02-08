import {Request, Response} from "express";
import {ResetPasswordService} from "./ResetPasswordService";

export class ResetPasswordController{

    constructor(private resetPasswordService: ResetPasswordService) {
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { password } = request.body

        const employer = await this.resetPasswordService.execute({id, password})

        return response.status(200).json({employer: employer})
    }
}