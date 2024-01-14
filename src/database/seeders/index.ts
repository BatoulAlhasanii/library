import "express-async-errors";
import { dataSource } from "../../util/app-data-source";
import { setDataSource } from "typeorm-extension";

const start = async () => {
  await dataSource.initialize();

  setDataSource(dataSource);

  process.exit();
};

start();
