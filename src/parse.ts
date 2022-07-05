import parseFile from "./modules/parseFiles";
import path from "path";
import { sintomas } from "./models";

const listaSintomas = parseFile(path.resolve("cid10.csv"));
const map = listaSintomas.map((sintomas: any) => {
  const obj = {
    codigo: sintomas.code,
    sintoma: sintomas.name,
  };

  return obj;
});

sintomas.instance.bulkCreate(map);
