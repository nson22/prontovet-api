import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ServerError} from "../../../error/ServerError";
import {randomUUID} from "crypto";

export const ERROR_MESSAGES = {
    NAME: "O nome não pode ser vazio, menor que 3 caracteres e maior que 255 caracteres.",
    PASSWORD: "A senha não pode ser vazio."
}

export class CreateEmployerService {
    constructor(private employersRepository: IEmployersRepository) {}

    async execute(name: string, password: string ): Promise<void>{
        if(!name || name.length < 3 || name.length > 255) {
            throw new ServerError(ERROR_MESSAGES.NAME)
        }

        if(!password){
            throw new ServerError(ERROR_MESSAGES.PASSWORD)
        }

        await this.employersRepository.create({
            id: randomUUID(),
            name,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }
}