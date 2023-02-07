export interface EmployerProps {
    id?: string
    name: string
    password: string
    createdAt?: Date
    updatedAt?: Date
}

export class Employer {
    id?: string
    name: string | undefined
    password: string | undefined
    createdAt: Date | undefined
    updatedAt: Date | undefined

    constructor() {
    }

}