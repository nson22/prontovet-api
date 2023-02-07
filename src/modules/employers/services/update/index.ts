import {EmployersRepository} from "../../repositories/EmployersRepository";
import {UpdateEmployerService} from "./UpdateEmployerService";
import {UpdateEmployerController} from "./UpdateEmployerController";

const employersRepository = EmployersRepository.getInstance()
const updateEmployersService = new UpdateEmployerService(employersRepository)
const updateEmployersController = new UpdateEmployerController(updateEmployersService)

export { updateEmployersController }
