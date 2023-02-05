import { UsersRepository } from "../../repositories/UsersRepository"
import {CreateUserService} from "./CreateUserService";
import {CreateUserController} from "./CreateUserController";

const userRepository = UsersRepository.getInstance()
const createUserService = new CreateUserService(userRepository)
const createUserController = new CreateUserController(createUserService)

export { createUserController }