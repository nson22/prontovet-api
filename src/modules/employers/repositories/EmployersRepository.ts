import {Employer, EmployerProps} from "../entities/Employer";
import {IEmployersRepository} from "./IEmployersRepository";

export class EmployersRepository implements IEmployersRepository{
    employers: Employer[]
    private static INSTANCE: EmployersRepository

    private constructor() {
        this.employers = []
    }

    public static getInstance(): EmployersRepository{
        if(!EmployersRepository.INSTANCE){
            EmployersRepository.INSTANCE = new EmployersRepository()
        }

        return EmployersRepository.INSTANCE
    }

    async create({ id, name, password, createdAt, updatedAt}: EmployerProps): Promise<void>{
        const employer = new Employer();

        Object.assign(employer, {
            id,
            name,
            password,
            createdAt,
            updatedAt
        })

        this.employers.push(employer);
    }

    async list(): Promise<Employer[]>{
        return this.employers
    }

    async update({ id, name, password, updatedAt}: EmployerProps): Promise<void> {
       this.employers.map((employer) => {
           if (employer.id === id){
               return {
                   ...employer,
                   name,
                   password,
                   updatedAt
               }
           }
           return employer
       })
    }

   async delete(id: string): Promise<void> {
        const index = this.employers.findIndex((employer) => {
            return employer.id === id
        })
        this.employers.splice(index, 1)
    }

    async findById(id: string): Promise<Employer | undefined> {
        return this.employers.find((employer) => employer.id === id);
    }
}