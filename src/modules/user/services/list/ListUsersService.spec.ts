import {ListUsersService} from "./ListUsersService";
import {UsersRepositoryInMemory} from "../../repositories/InMemory/UsersRepositoryInMemory";

let usersRepositoryInMemory: UsersRepositoryInMemory
let listUsersService: ListUsersService
describe("List users services", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        listUsersService = new ListUsersService(usersRepositoryInMemory)
    })

    it("should be possible to list an empty if there isn't no users records", async () => {
        const users = await listUsersService.execute()

        expect(users).toHaveLength(0)
    })

    it("should be possible to list all users records", async () => {
        await usersRepositoryInMemory.create({
            name: "John Doe",
            profile: "default"
        })

        const users = await listUsersService.execute()

        expect(users.length).toBeGreaterThan(0)

        users.forEach((user) => {
            expect(user).toHaveProperty("id")
            expect(user).toHaveProperty("name")
            expect(user).toHaveProperty("profile")
            expect(user).toHaveProperty("createdAt")
        })
    })
})