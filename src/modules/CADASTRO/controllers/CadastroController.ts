import { Request, Response } from "express";
import CadastroUseCase from "../useCases/CadastroUseCase";
type BodyCadastroProfissional = {
  foto_perfil: string;
  descricao_foto: string;
  sobre: string;
  especialidade: string;
  foto_rosto_carteira: string;
  carta_entrada: string;
};
type BodyCadastroServico = {
  nome: string;
  duracao: string;
  valor: number;
  modalidade: string;
  profissional_id: number;
};

export default class CadastroController {
  private useCase: CadastroUseCase;
  constructor(useCase: CadastroUseCase) {
    this.useCase = useCase;
  }
  update() {
    return async (req: Request, res: Response) => {
      try {
        //
        const { id } = req.params;
        const cadastroprofissional = await this.useCase.cadastrarProfissional(
          req.body as BodyCadastroProfissional,
          id
        );

        if (cadastroprofissional) {
          return res.status(201).json(cadastroprofissional);
        }
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
  create() {
    return async (req: Request, res: Response) => {
      try {
        //

        const cadastroservico = await this.useCase.cadastrarServico(
          req.body as BodyCadastroServico
        );
        if (cadastroservico) {
          return res.status(201).json(cadastroservico);
        }
      } catch (error) {
        console.log(error);
        return res.status(400);
      }
    };
  }
}
