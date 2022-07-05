import CSV from "xlsx";

export default function parseCSV(file: string) {
  const arquivo = CSV.readFile(file);
  const parsedData = CSV.utils.sheet_to_json(
    arquivo.Sheets[arquivo.SheetNames[0]]
  );

  return parsedData as any[];
}
