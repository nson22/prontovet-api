import {User} from "../../entities/User";
import {UsersRepository} from "../../repositories/UsersRepository";

export class ListUsersService {
    constructor(private usersRepository: UsersRepository) {}

    async execute(): Promise<User[]>{
        return this.usersRepository.list()
    }
}