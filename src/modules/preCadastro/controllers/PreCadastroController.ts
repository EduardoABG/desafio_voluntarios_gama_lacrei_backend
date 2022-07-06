import { Request, Response } from "express";
import PreCadastroUseCase from "../useCases/PreCadastroUseCase";
type BodyPreCadastro = {
  estado_atuacao: string;
  nome_completo: string;
  email: string;
  prefixo: string;
  num_registro: number;
  senha: string;
  termos: boolean;
};

export default class PreCadastroController {
  private useCase: PreCadastroUseCase;
  constructor(useCase: PreCadastroUseCase) {
    this.useCase = useCase;
  }
  create() {
    return async (req: Request, res: Response) => {
      try {
        //
        const novoprofissional = await this.useCase.cadastrarProfissional(
          req.body as BodyPreCadastro
        );
        if (novoprofissional) {
          return res.status(201).json(novoprofissional);
        }
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
}
