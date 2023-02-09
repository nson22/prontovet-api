import {Employer} from "../../entities/Employer";
import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ServerError} from "../../../error/ServerError";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

export class FindEmployerByIdService{

    constructor(private employersRepository: IEmployersRepository) {
    }
    async execute(id: string): Promise<Employer | undefined>{
        const employerExist = await this.employersRepository.findById(id)

        if (!employerExist) throw new ServerError(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)

        return employerExist
    }
}