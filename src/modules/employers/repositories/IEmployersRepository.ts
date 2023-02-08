import {Employer, EmployerProps} from "../entities/Employer";
import {UpdateEmployerProps} from "./EmployersRepository";

export interface IEmployersRepository {
    create(employerProps: EmployerProps): Promise<Employer>
    list(): Promise<Employer[]>
    delete(id: string): Promise<void>
    update(employerProps: UpdateEmployerProps): Promise<void>
    findById(id: string): Promise<Employer | undefined>
}