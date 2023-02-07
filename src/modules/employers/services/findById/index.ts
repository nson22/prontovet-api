import {FindEmployerByIdController} from "./FindEmployerByIdController";
import {FindEmployerByIdService} from "./FindEmployerByIdService";
import {EmployersRepository} from "../../repositories/EmployersRepository";

const employersRepository = EmployersRepository.getInstance()
const findEmployerByIdService = new FindEmployerByIdService(employersRepository)
const findEmployerByIdController = new FindEmployerByIdController(findEmployerByIdService)

export { findEmployerByIdController }