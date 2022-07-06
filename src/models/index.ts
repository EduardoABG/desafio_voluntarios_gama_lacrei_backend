import { mySqlConection } from "../database";
import { Sintomas } from "./Sintomas";
import { Profissao } from "./Profissao";
import { Horario } from "./Horario";
import { Servico } from "./Servico";
import { ConsultorioConvenio } from "./ConsultorioConvenio";
import { Especialidade } from "./Especialidade";
const sintomas = new Sintomas(mySqlConection);
const profissao = new Profissao(mySqlConection);
const horario = new Horario(mySqlConection);
const servico = new Servico(mySqlConection);
const consultorioConvenio = new ConsultorioConvenio(mySqlConection);
const especialidade = new Especialidade(mySqlConection);
export {
  sintomas,
  profissao,
  horario,
  servico,
  consultorioConvenio,
  especialidade,
};
