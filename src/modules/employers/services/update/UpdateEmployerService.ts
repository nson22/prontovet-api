import {EmployersRepository} from "../../repositories/EmployersRepository";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

export interface UpdateEmployerRequest {
    id: string
    name: string
}

export class UpdateEmployerService {
    constructor(private employersRepository: EmployersRepository) {
    }
    async execute({id, name}: UpdateEmployerRequest): Promise<void> {
       const employerExists = await this.employersRepository.findById(id)

        if(!employerExists) {
            throw new Error(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)
        }

        await this.employersRepository.update({id, name, updatedAt: new Date()})

    }
}