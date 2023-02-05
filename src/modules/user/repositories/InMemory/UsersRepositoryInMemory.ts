import {IUsersRepository} from "../IUsersRepository";
import {User} from "../../entities/User";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create({name, profile, password }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            profile,
        });

        this.users.push(user);
    }

    async findByName(name: string): Promise<User | undefined> {
        return this.users.find((user) => user.name === name);
    }

    async list(): Promise<User[]> {
        return this.users;
    }
}

export { UsersRepositoryInMemory };