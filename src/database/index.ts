import Conection from "./Conection";

const mySqlConection = new Conection("la-vie", "root", "", {
  dialect: "mysql",
  port: 3306,
  host: "localhost",
});

export { mySqlConection };
