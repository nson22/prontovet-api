import {UsersRepository} from "../../repositories/UsersRepository";

interface IRequest {
    name: string
    password: string
    profile: "default" | "admin" | "vet"
}

export class CreateUserService{
    constructor(private userRepository: UsersRepository) {}

    async execute({ name, profile, password}: IRequest): Promise<void>{
        const userExists = await this.userRepository.findByName(name)

        if(userExists) {
            throw new Error(`${name} already exists in the database.`)
        }

        await this.userRepository.create({name, profile, password})
    }
}