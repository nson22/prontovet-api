import {beforeEach, describe, expect, it} from "vitest";
import {Employer} from "../../entities/Employer";
import {EmployersRepositoryInMemory} from "../../repositories/InMemory/EmployersRepositoryInMemory";
import {CreateEmployerService, } from "./CreateEmployerService";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployerService: CreateEmployerService

describe("Employers repository test suite", () => {
    beforeEach(() => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        createEmployerService = new CreateEmployerService(employersRepositoryInMemory)
    })

    it("should be possible create an employer", async () => {
        const employer = await createEmployerService.execute({name: "John Doe", password: "password"})
        expect(employer).toBeInstanceOf(Employer)
    })

    it("should not be possible create an employer with empty name", async () => {
        await expect(
            createEmployerService.execute({name: "", password:"password"})
        ).rejects.toThrowError(ERROR_MESSAGES.NAME)
    })

    it("should not be possible create an employer with name less than 3 characters", async () => {
        await expect(
            createEmployerService.execute({name: "ab", password:"password"})
        ).rejects.toThrowError(ERROR_MESSAGES.NAME)
    })

    it("should not be possible create an employer with name great than 255 characters", async () => {
        const name = "a".repeat(256)
        await expect(
            createEmployerService.execute({name, password:"password"})
        ).rejects.toThrowError(ERROR_MESSAGES.NAME)
    })

    it("should not be possible create an employer with empty password", async () => {
        await expect(
            createEmployerService.execute({name: "John Doe", password:""})
        ).rejects.toThrowError(ERROR_MESSAGES.PASSWORD)
    })

    it("should not be possible create an employer with password less than 6 characters", async () => {
        await expect(
            createEmployerService.execute({name: "John Doe", password:"pass"})
        ).rejects.toThrowError(ERROR_MESSAGES.PASSWORD)
    })

    it("should not be possible create an employer with password great than 12 characters", async () => {
        const password = "a".repeat(13)
        await expect(
            createEmployerService.execute({name: "John Doe", password})
        ).rejects.toThrowError(ERROR_MESSAGES.PASSWORD)
    })
})
