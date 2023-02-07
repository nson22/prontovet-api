import {EmployersRepository} from "../../repositories/EmployersRepository";
import {ListEmployersController} from "./ListEmployersController";
import {ListEmployersService} from "./ListEmployersService";

const employersRepository = EmployersRepository.getInstance()
const listEmployersService = new ListEmployersService(employersRepository)
const listEmployersController = new ListEmployersController(listEmployersService)

export { listEmployersController }
