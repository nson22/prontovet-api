import {EmployersRepository} from "../../repositories/EmployersRepository";
import {Employer} from "../../entities/Employer";

interface UpdateEmployerRequest {
    id: string
    name: string
    password: string
}

export class UpdateEmployerService {
    constructor(private employersRepository: EmployersRepository) {
    }
    async execute({id, name, password}: UpdateEmployerRequest): Promise<void> {
       const employer = await this.employersRepository.findById(id)

        if(!employer) {
            throw new Error(`${name} não encontrado no banco de dados.`)
        }

        employer.name = name
        employer.password = password
        employer.updatedAt = new Date()

        // @ts-ignore
        await this.employersRepository.update(employer)

    }
}