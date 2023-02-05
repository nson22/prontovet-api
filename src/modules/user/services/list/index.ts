import {UsersRepository} from "../../repositories/UsersRepository";
import {ListUsersController} from "./ListUsersController";
import {ListUsersService} from "./ListUsersService";

const userRepository = UsersRepository.getInstance()
const readUserService = new ListUsersService(userRepository)
const listUsersController = new ListUsersController(readUserService)

export { listUsersController }
