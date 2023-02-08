import {EmployersRepository} from "../../repositories/EmployersRepository";
import {Employer} from "../../entities/Employer";

interface UpdateEmployerRequest {
    id: string
    name: string
}

export const MESSAGES = {
    EMPLOYER_NOT_FOUND: `Usuário não encontrado no banco de dados.`
}

export class UpdateEmployerService {
    constructor(private employersRepository: EmployersRepository) {
    }
    async execute({id, name}: UpdateEmployerRequest): Promise<void> {
       const employer = await this.employersRepository.findById(id)

        if(!employer) {
            throw new Error(MESSAGES.EMPLOYER_NOT_FOUND)
        }

        await this.employersRepository.update({id, name})

    }
}