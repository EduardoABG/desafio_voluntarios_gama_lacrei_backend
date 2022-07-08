import { Request, Response } from "express";
import PosCadastroUseCase from "../useCases/PosCadastroUseCase";
type BodyPosCadastro = {
  pronome_artigo: string;
  etnia: string;
  identidade: string;
  sexualidade: string;
  pcd: string;
  publico_alvo: string;
  rqe?: string;
  doencas: string;
  formacao: string;
};

export default class PosCadastroController {
  private useCase: PosCadastroUseCase;
  constructor(useCase: PosCadastroUseCase) {
    this.useCase = useCase;
  }
  update() {
    return async (req: Request, res: Response) => {
      try {
        //
        const { id } = req.params;
        const atualizaprofissional = await this.useCase.cadastrarProfissional(
          req.body as BodyPosCadastro,
          id
        );
        if (atualizaprofissional) {
          return res.status(20).json(atualizaprofissional);
        }
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
}
