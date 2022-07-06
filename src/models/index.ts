import { mySqlConection } from "../database";
import { Sintomas } from "./Sintomas";
import { Profissao } from "./Profissao";
import { Horario } from "./Horario";
import { Servico } from "./Servico";
import { ConsultorioConvenio } from "./ConsultorioConvenio";
import { Especialidade } from "./Especialidade";
import { Profissional } from "./Profissional";
import { ConsultorioHorario } from "./ConsultorioHorario";
import { Convenio } from "./Convenio";
import { Consultorio } from "./Consultorio";
const sintomas = new Sintomas(mySqlConection);
const profissao = new Profissao(mySqlConection);
const horario = new Horario(mySqlConection);
const servico = new Servico(mySqlConection);
const consultorioConvenio = new ConsultorioConvenio(mySqlConection);
const especialidade = new Especialidade(mySqlConection);
const profissional = new Profissional(mySqlConection);
const consultorioHorario = new ConsultorioHorario(mySqlConection);
const convenio = new Convenio(mySqlConection);
const consultorio = new Consultorio(mySqlConection);
export {
  sintomas,
  profissao,
  horario,
  servico,
  consultorioConvenio,
  especialidade,
  profissional,
  consultorioHorario,
  convenio,
  consultorio,
};
