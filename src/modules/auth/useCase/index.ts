import { authRepository } from "../../../repositories";
import AuthUseCase from "./authUseCase";

const authUseCase = new AuthUseCase(authRepository);

export { authUseCase };
