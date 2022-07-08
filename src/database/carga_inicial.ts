import parseFile from "../modules/parseFiles";
import path from "path";

import { profissao } from "../models";
import { especialidade } from "../models";
import { convenio } from "../models";
import { sintomas } from "../models";

const listaProfissao = parseFile(path.resolve("docs, data, profissao.csv"));
const listaEspecialidade = parseFile(path.resolve("docs, data, especialidades.csv"));
const listaConvenio = parseFile(path.resolve("docs, data, convenios.csv"));
const listaSintoma = parseFile(path.resolve("docs, data, sintomas.csv"));

async function cargaInicial() {
  await profissao.instance.bulkCreate(listaProfissao);
  await especialidade.instance.bulkCreate(listaEspecialidade);
  await convenio.instance.bulkCreate(listaConvenio);
  await sintomas.instance.bulkCreate(listaSintoma);
}

cargaInicial();

