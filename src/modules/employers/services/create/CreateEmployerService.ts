import {IEmployersRepository} from "../../repositories/IEmployersRepository";
import {ServerError} from "../../../error/ServerError";
import {randomUUID} from "crypto";
import {Employer} from "../../entities/Employer";
import {hash} from "bcrypt"
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

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

        const hashedPassword = await hash(password, 8)

        return await this.employersRepository.create({
            id: randomUUID(),
            name,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    }
}