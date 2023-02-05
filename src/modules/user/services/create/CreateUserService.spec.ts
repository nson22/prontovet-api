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
            profile: "admin"
        })

        // expect(user).toHaveProperty("id")
        // expect(user).toHaveProperty("name")
        // expect(user).toHaveProperty("profile")
        // expect(user).toHaveProperty("createdAt")
        // expect(user).toBeInstanceOf(User)
    })

    it("should be possible to list all users records", async () => {
    })
})