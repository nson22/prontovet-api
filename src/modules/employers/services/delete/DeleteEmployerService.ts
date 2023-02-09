import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

export class DeleteEmployerService {
    constructor(private employersRepository: IEmployersRepository) {
    }

    async execute(id: string): Promise<boolean | undefined>{
        const employerExists = await this.employersRepository.findById(id)

        if(!employerExists) {
            throw new Error(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)
        }

        return await this.employersRepository.delete(id)

    }
}