import {Employer, EmployerProps} from "../entities/Employer";

export interface UpdateEmployerProps {
    id: string
    name?: string
    password?: string
    updatedAt?: Date

}

export interface IEmployersRepository {
    create(employerProps: EmployerProps): Promise<Employer>
    list(): Promise<Employer[]>
    delete(id: string): Promise<boolean | undefined>
    update(employerProps: UpdateEmployerProps): Promise<void>
    findById(id: string): Promise<Employer | undefined>
}