import {User} from "../entities/User";


export interface IUsersRepository{
    create(data: ICreateUserDTO): Promise<void>

    list(): Promise<User[]>

    findByName(name: string): Promise<User | undefined>
}