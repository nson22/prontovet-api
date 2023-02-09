import {beforeEach, describe, expect, it} from "vitest";
import {EmployersRepositoryInMemory} from "../../repositories/InMemory/EmployersRepositoryInMemory";
import {UpdateEmployerRequest, UpdateEmployerService} from "./UpdateEmployerService";
import {CreateEmployerService} from "../create/CreateEmployerService";
import {Employer} from "../../entities/Employer";
import {FindEmployerByIdService} from "../findById/FindEmployerByIdService";

let employer: Employer
let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployerService: CreateEmployerService
let updateEmployerService: UpdateEmployerService
let findEmployerByIdService: FindEmployerByIdService

describe("Employers repository test suite", () => {
    beforeEach(async () => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        createEmployerService = new CreateEmployerService(employersRepositoryInMemory)
        updateEmployerService = new  UpdateEmployerService(employersRepositoryInMemory)
        findEmployerByIdService = new FindEmployerByIdService(employersRepositoryInMemory)

        employer =  await createEmployerService.execute({
            name: "John Doe",
            password: "password"
        })
    })

    it("should be not possible update an employer not saved", async () => {
        await expect(
            updateEmployerService.execute(<UpdateEmployerRequest>{
                id: "",
                name: "Jane Doe"
            })
        ).rejects.toThrowError("Usuário não encontrado no banco de dados.")
    })

    it("should be not possible update an employer", async () => {

        await updateEmployerService.execute(<UpdateEmployerRequest>{
            id: employer.id,
            name: "Jane Doe"
        })

        const empl = await findEmployerByIdService.execute(<string>employer?.id)

        expect(empl?.name).toEqual("Jane Doe")

    })
})
