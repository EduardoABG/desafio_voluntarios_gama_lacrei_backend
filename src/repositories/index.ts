import PreCadastroRepository from "./preCadastro";
import { profissional } from "../models";
const profissionalRepository = new PreCadastroRepository(profissional);
export { profissionalRepository };
