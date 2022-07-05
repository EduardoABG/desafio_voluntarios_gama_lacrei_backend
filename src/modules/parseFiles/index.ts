import parseCSV from "./leitores/csv";

export default function parseFile(file: string): any[] {
  const extensao = file.split(".").pop();

  let data = [];
  switch (extensao) {
    case "csv":
      data = parseCSV(file);
      break;

    default:
      console.log("Arquivo não mapeado");
      break;
  }

  return data;
}
