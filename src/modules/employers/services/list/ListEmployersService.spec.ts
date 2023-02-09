import {beforeEach, describe, expect, it} from "vitest";
import {EmployersRepositoryInMemory} from "../../repositories/InMemory/EmployersRepositoryInMemory";
import {ListEmployersService} from "./ListEmployersService";
import {CreateEmployerService} from "../create/CreateEmployerService";
import {Employer} from "../../entities/Employer";

let employer: Employer
let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployerService: CreateEmployerService
let listEmployersService: ListEmployersService

describe("Employers repository test suite", () => {
    beforeEach(async () => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        createEmployerService = new CreateEmployerService(employersRepositoryInMemory)
        listEmployersService = new  ListEmployersService(employersRepositoryInMemory)
    })

    it("should be possible list an empty list if no employer is saved", async () => {
        expect(
            await listEmployersService.execute()
        ).toHaveLength(0)
    })

    it("should be possible list all employers", async () => {
        employer = await createEmployerService.execute({
            name: "John Doe",
            password: "password"
        })

        expect(
            await listEmployersService.execute()
        ).toBeInstanceOf(Array)
    })


})