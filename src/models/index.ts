import { mySqlConection } from "../database";
import { Sintomas } from "./Sintomas";

const sintomas = new Sintomas(mySqlConection);
export { sintomas };
