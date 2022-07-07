import { Request, Response } from "express";
import AuthUseCase from "../useCase/AuthUseCase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
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
}
