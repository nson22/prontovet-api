import {beforeEach, describe, expect, it} from "vitest";
import {Employer} from "../entities/Employer";
import {EmployersRepositoryInMemory} from "./InMemory/EmployersRepositoryInMemory";
import {CreateEmployerService, ERROR_MESSAGES} from "../services/create/CreateEmployerService";
import {ServerError} from "../../error/ServerError";

let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployersService: CreateEmployerService

describe("Employers repository test suite", () => {
    beforeEach(() => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        createEmployersService = new CreateEmployerService(employersRepositoryInMemory)
    })

    it("should be possible create an employer", async () => {
        const employer = await createEmployersService.execute({name: "John Doe", password: "password"})
        expect(employer).toBeInstanceOf(Employer)
    })

    it("should not be possible create an employer with empty name", async () => {
        await expect(
            createEmployersService.execute({name: "", password:"password"})
        ).rejects.toThrowError(ERROR_MESSAGES.NAME)
    })

    it("should not be possible create an employer with name less than 3 characters", async () => {
        await expect(
            createEmployersService.execute({name: "ab", password:"password"})
        ).rejects.toThrowError(ERROR_MESSAGES.NAME)
    })

    it("should not be possible create an employer with name great than 255 characters", async () => {
        const name = "a".repeat(256)
        await expect(
            createEmployersService.execute({name, password:"password"})
        ).rejects.toThrowError(ERROR_MESSAGES.NAME)
    })

    it("should not be possible create an employer with empty password", async () => {
        await expect(
            createEmployersService.execute({name: "John Doe", password:""})
        ).rejects.toThrowError(ERROR_MESSAGES.PASSWORD)
    })

    it("should not be possible create an employer with password less than 6 characters", async () => {
        await expect(
            createEmployersService.execute({name: "John Doe", password:"pass"})
        ).rejects.toThrowError(ERROR_MESSAGES.PASSWORD)
    })

    it("should not be possible create an employer with password great than 12 characters", async () => {
        const password = "a".repeat(13)
        await expect(
            createEmployersService.execute({name: "John Doe", password})
        ).rejects.toThrowError(ERROR_MESSAGES.PASSWORD)
    })
})