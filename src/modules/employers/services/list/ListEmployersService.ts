import {Employer} from "../../entities/Employer";
import {IEmployersRepository} from "../../repositories/IEmployersRepository";

export class ListEmployersService {
    constructor(private employersRepository: IEmployersRepository) {}

    async execute(): Promise<Employer[]>{
        return await this.employersRepository.list()
    }
}