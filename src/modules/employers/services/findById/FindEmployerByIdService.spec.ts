import {beforeEach, describe, expect, it} from "vitest";
import {EmployersRepositoryInMemory} from "../../repositories/InMemory/EmployersRepositoryInMemory";
import {FindEmployerByIdService} from "./FindEmployerByIdService";
import {CreateEmployerService} from "../create/CreateEmployerService";
import {Employer} from "../../entities/Employer";

let employer: Employer
let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployerService: CreateEmployerService
let findEmployerByIdService: FindEmployerByIdService

describe("Employers repository test suite", () => {
    beforeEach(async () => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        createEmployerService = new CreateEmployerService(employersRepositoryInMemory)
        findEmployerByIdService = new  FindEmployerByIdService(employersRepositoryInMemory)

        employer = await createEmployerService.execute({
            name: "John Doe",
            password: "password"
        })
    })

    it("should be possible find an employer by id", async () => {
        expect(
            await findEmployerByIdService.execute(<string>employer?.id)
        ).toBeInstanceOf(Employer)
    })

    it("should be not possible find an employer with invalid id", async () => {
        await expect(
             findEmployerByIdService.execute("invalid-id")
        ).rejects.toThrowError("Usuário não encontrado no banco de dados.")
    })
})