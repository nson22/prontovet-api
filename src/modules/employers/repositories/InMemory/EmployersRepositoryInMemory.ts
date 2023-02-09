import {IEmployersRepository, UpdateEmployerProps} from "../IEmployersRepository";
import {Employer, EmployerProps} from "../../entities/Employer";
import {ServerError} from "../../../error/ServerError";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

export class EmployersRepositoryInMemory implements IEmployersRepository {
    employers: Employer[] = []

    async create({ id, name, password, createdAt, updatedAt}: EmployerProps): Promise<Employer>{
        const employer = new Employer();

        Object.assign(employer, {
            id,
            name,
            password,
            createdAt,
            updatedAt
        })

        this.employers.push(employer);

        return employer
    }

    async list(): Promise<Employer[]>{
        return this.employers
    }

    async update({ id, name, updatedAt}: UpdateEmployerProps): Promise<void> {
       this.employers.map((employer) => {
            if (employer.id === id){
                return {
                    ...employer,
                    name,
                    updatedAt
                }
            }
            return employer
       })
    }

    async delete(id: string): Promise<boolean> {
        const index = this.employers.findIndex((employer) => {
            return employer.id === id
        })

        if(!this.employers.splice(index, 1)){
            throw new ServerError(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)
        }

        return true
    }

    async findById(id: string): Promise<Employer | undefined> {
        return this.employers.find((employer) => employer.id === id);
    }
}
