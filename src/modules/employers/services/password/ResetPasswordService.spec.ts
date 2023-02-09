import {beforeEach, describe, expect, it} from "vitest";
import {EmployersRepositoryInMemory} from "../../repositories/InMemory/EmployersRepositoryInMemory";
import {CreateEmployerService} from "../create/CreateEmployerService";
import {Employer} from "../../entities/Employer";
import {FindEmployerByIdService} from "../findById/FindEmployerByIdService";
import {ResetPasswordService, ResetPasswordServiceRequest} from "./ResetPasswordService";
import {ERROR_MESSAGES} from "../../resources/ErrorMessages";

let employer: Employer
let employersRepositoryInMemory: EmployersRepositoryInMemory
let createEmployerService: CreateEmployerService
let findEmployerByIdService: FindEmployerByIdService
let resetPasswordService: ResetPasswordService

describe("Employers repository test suite", () => {
    beforeEach(async () => {
        employersRepositoryInMemory = EmployersRepositoryInMemory.getInstance()
        findEmployerByIdService = new FindEmployerByIdService(employersRepositoryInMemory)
        resetPasswordService = new ResetPasswordService(employersRepositoryInMemory)
        createEmployerService = new CreateEmployerService(employersRepositoryInMemory)
    })

    it("should be not possible reset password for an employer not saved", async () => {
        await expect( resetPasswordService.execute({
            id:"",
            password: "password"
        })).rejects.toThrowError(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)
    })

    it("should be possible reset employer password", async () => {
        employer =  await createEmployerService.execute({
            name: "John Doe",
            password: "password"
        })

        await expect( resetPasswordService.execute(<ResetPasswordServiceRequest>{
            id: employer?.id,
            password: "password"
        })).rejects.toThrowError(ERROR_MESSAGES.EMPLOYER_NOT_FOUND)

    })
})
