import {EmployersRepository} from "../../repositories/EmployersRepository";
import {DeleteEmployerController} from "./DeleteEmployerController";
import {DeleteEmployerService} from "./DeleteEmployerService";

const employersRepository = EmployersRepository.getInstance()
const deleteEmployersService = new DeleteEmployerService(employersRepository)
const deleteEmployersController = new DeleteEmployerController(deleteEmployersService)

export { deleteEmployersController }
