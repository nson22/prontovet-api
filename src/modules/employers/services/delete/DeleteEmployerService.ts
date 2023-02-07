import {IEmployersRepository} from "../../repositories/IEmployersRepository";

export class DeleteEmployerService {
    constructor(private usersRepository: IEmployersRepository) {
    }

    async execute(id: string): Promise<void>{
        const employerExists = await this.usersRepository.findById(id)

        if(!employerExists) {
            throw new Error(`Usuário não encontrado na base de dados.`)
        }

        await this.usersRepository.delete(id)
    }
}