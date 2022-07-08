import { Request, Response } from "express";
import AuthUseCase from "../useCase/AuthUseCase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import logger from "../../../infra/logger";
import CryptoJS from "crypto-js";
import key from "../../../infra/config/secret";
type BodyLogin = {
  email: string;
  senha: string;
};
export default class AuthController {
  private useCase: AuthUseCase;
  constructor(useCase: AuthUseCase) {
    this.useCase = useCase;
  }
  login() {
    return async (req: Request, res: Response) => {
      try {
        //
        const login = await this.useCase.login(req.body as BodyLogin);

        if (!login) {
          return res.status(400).json("Email não cadastrado!");
        }
        if (!bcrypt.compareSync(req.body.senha, login.senha)) {
          return res.status(401).json("Senha invalida!");
        }
        const token = jwt.sign(
          {
            id: login.id,
            email: login.email,
            nome: login.name,
            nivel: login.nivel,
          },
          "CRUDGAMA"
        );
        return res.json(token);
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
  gerarToken() {
    return async (req: Request, res: Response) => {
      try {
        logger.info(
          `[gerarTokenDeSenha] start function body=${JSON.stringify(
            req.body
          )} client_ip=${req.ips}`
        );
        const savedUser = await this.useCase.gerarTokenDeSenha(
          req.body as BodyLogin
        );
        if (!savedUser) {
          logger.error(`[gerarTokenDeSenha] user not found`);
          return res.status(404).json("Email não encontrado");
        }
        logger.log("nivel", "mensagem");
        logger.info(`[gerarTokenDeSenha] user = ${JSON.stringify(savedUser)}`);

        const token = CryptoJS.AES.encrypt(
          `${savedUser.email}`,
          "GAMACRUD"
        ).toString();
        // enviar um email com o token
        savedUser.hashResetSenha = token;

        await savedUser.save();
        logger.info(`[gerarTokenDeSenha] finish function`);
        return res.json(token);
      } catch (error) {
        console.log(error);
      }
    };
  }
}
