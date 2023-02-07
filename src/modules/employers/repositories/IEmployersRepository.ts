import {Employer, EmployerProps} from "../entities/Employer";

export interface IEmployersRepository {
    create(employerProps: EmployerProps): Promise<void>
    list(): Promise<Employer[]>
    delete(id: string): Promise<void>
    update(employerProps: EmployerProps): Promise<void>
    findById(id: string): Promise<Employer | undefined>
}