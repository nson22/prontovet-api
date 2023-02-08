import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ServerError} from "../../../error/ServerError";
import {randomUUID} from "crypto";
import {Employer} from "../../entities/Employer";

export const ERROR_MESSAGES = {
    NAME: "O nome não pode ser vazio, menor que 3 caracteres e maior que 255 caracteres.",
    PASSWORD: "A senha não pode ser vazia, menor que 6 caracteres e maior que 12 caracteres."
}

interface CreateEmployerServiceRequest{
    name: string
    password: string
}

export class CreateEmployerService {
    constructor(private employersRepository: IEmployersRepository) {}

    async execute({ name, password}: CreateEmployerServiceRequest): Promise<Employer>{
        if(!name || name.length < 3 || name.length > 255) {
            throw new ServerError(ERROR_MESSAGES.NAME)
        }

        if(!password || password.length < 6 || password.length > 12){
            throw new ServerError(ERROR_MESSAGES.PASSWORD)
        }

        const employer = await this.employersRepository.create({
            id: randomUUID(),
            name,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        return employer
    }
}