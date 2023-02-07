import {Employer} from "../../entities/Employer";
import {IEmployersRepository} from "../../repositories/IEmployersRepository";

export class FindEmployerByIdService{

    constructor(private employersRepository: IEmployersRepository) {
    }
    async execute(id: string): Promise<Employer | undefined>{
        return await this.employersRepository.findById(id)
    }
}