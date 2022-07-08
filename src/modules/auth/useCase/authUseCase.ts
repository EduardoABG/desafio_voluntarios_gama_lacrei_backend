import IRepository from "../../../repositories/IRepository";
type PayloadLogin = {
  email: string;
  senha: string;
};

export default class AuthUseCase {
  private repository: IRepository;

  constructor(authRepository: IRepository) {
    this.repository = authRepository;
  }

  login(payload: PayloadLogin) {
    const loginData = {
      email: payload.email,
      senha: payload.senha,
    };
    const novoLogin = this.repository.find(loginData);
    return novoLogin;
  }
  gerarTokenDeSenha(payload: PayloadLogin) {
    const tokenData = { email: payload.email, senha: payload.senha };
    const novoToken = this.repository.find(tokenData);
    return novoToken;
  }
}
