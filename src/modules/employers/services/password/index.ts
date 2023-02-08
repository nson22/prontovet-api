import {EmployersRepository} from "../../repositories/EmployersRepository";
import {ResetPasswordService} from "./ResetPasswordService";
import {ResetPasswordController} from "./ResetPasswordController";

const employersRepository = EmployersRepository.getInstance()
const resetPasswordService = new ResetPasswordService()
const resetPasswordController = new ResetPasswordController()

export { resetPasswordController }