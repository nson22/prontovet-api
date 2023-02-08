import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ServerError} from "../../../error/ServerError";
import {MESSAGES} from "../update/UpdateEmployerService";

interface ResetPasswordServiceRequest {
    id: string
    password: string
}
export class ResetPasswordService{
    constructor(private employerRepository: IEmployersRepository) {
    }

    async execute({id, password}: ResetPasswordServiceRequest) {
        const employerExists = this.employerRepository.findById(id)

        if(!employerExists) {
            throw new ServerError(MESSAGES.EMPLOYER_NOT_FOUND)
        }

        await this.employerRepository.update({ id, password })
    }
}