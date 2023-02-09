import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ServerError} from "../../../error/ServerError";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";
import {hash} from "bcrypt";

export interface ResetPasswordServiceRequest {
    id: string
    password: string
}
export class ResetPasswordService{
    constructor(private employerRepository: IEmployersRepository) {
    }

    async execute({id, password}: ResetPasswordServiceRequest): Promise<void> {
        const employerExists = await this.employerRepository.findById(id)

        if(!employerExists) {
            throw new ServerError(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)
        }

        const hashedPassword = await hash(password, 8)

        await this.employerRepository.update({ id, password: hashedPassword })
    }
}