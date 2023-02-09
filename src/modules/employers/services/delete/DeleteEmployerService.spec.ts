import {beforeEach, describe, expect, it} from "vitest";
import {EmployersRepositoryInMemory} from "../../repositories/InMemory/EmployersRepositoryInMemory";
import {DeleteEmployerService} from "./DeleteEmployerService";
import {CreateEmployerService} from "../create/CreateEmployerService";
import {Employer} from "../../entities/Employer";

let employer: Employer
let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployerService: CreateEmployerService
let deleteEmployerService: DeleteEmployerService

describe("Employers repository test suite", () => {
    beforeEach(async () => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        createEmployerService = new CreateEmployerService(employersRepositoryInMemory)
        deleteEmployerService = new  DeleteEmployerService(employersRepositoryInMemory)
    })

    it("should be not possible delete an employer not saved", async () => {
        await expect(
            deleteEmployerService.execute("")
        ).rejects.toThrowError("Usuário não encontrado no banco de dados.")
    })

    it("should be possible delete an employer", async () => {
        employer = await createEmployerService.execute({
            name: "John Doe",
            password: "password"
        })

        expect(await deleteEmployerService.execute(<string>employer?.id)).toBeTruthy()

    })
})