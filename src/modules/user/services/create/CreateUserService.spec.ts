import {CreateUserService} from "./CreateUserService";
import {UsersRepositoryInMemory} from "../../repositories/InMemory/UsersRepositoryInMemory";

let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserService: CreateUserService
describe("List users services", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        createUserService = new CreateUserService(usersRepositoryInMemory)
    })

    //Todo -> Post must return User to apply assertions
    it("should be possible create a user", async () => {
        await createUserService.execute({
            name: "John Doe",
            profile: "admin",
            password: "password"
        })
    })

    it("should be not possible create an user that already exists", async () => {
        await createUserService.execute({
            name: "John Doe",
            profile: "admin",
            password: "password"
        })

        await createUserService.execute({
            name: "John Doe",
            profile: "admin",
            password: "password"
        })

        expect(new Error().message).toBe(`Error: John Doe already exists in the database.`)
    })
})