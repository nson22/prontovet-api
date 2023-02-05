import {User} from "../entities/User";
import {IUsersRepository} from "./IUsersRepository";

export class UsersRepository implements IUsersRepository{
    users: User[]
    private static INSTANCE: UsersRepository

    private constructor() {
        this.users = []
    }

    public static getInstance(): UsersRepository{
        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository()
        }

        return UsersRepository.INSTANCE
    }

    async create({ name, profile, password}: ICreateUserDTO): Promise<void>{
        const user = new User()

        Object.assign(user, {
            name,
            profile,
            password,
            createdAt: new Date()
        })

        this.users.push(user)
    }

    async list(): Promise<User[]>{
        return this.users
    }

    async findByName(name: string): Promise<User | undefined>{
        return  this.users.find((user) => user.name === name )
    }
}