import { EmployersRepository } from "../../repositories/EmployersRepository"
import {CreateEmployerService} from "./CreateEmployerService";
import {CreateEmployerController} from "./CreateEmployerController";

const employersRepository = EmployersRepository.getInstance()
const createEmployersService = new CreateEmployerService(employersRepository)
const createEmployersController = new CreateEmployerController(createEmployersService)

export { createEmployersController }