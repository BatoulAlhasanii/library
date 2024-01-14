import { dataSource } from "../src/util/app-data-source";

export const initDB = async () => {
  const db = await dataSource.initialize();

  return db;
};

export const clearDB = async () => {
  const entities = dataSource.entityMetadatas;
  for (const entity of entities) {
    const repository = await dataSource.getRepository(entity.name);

    await repository.query(`SET FOREIGN_KEY_CHECKS = 0;`);
    await repository.query(`DELETE FROM ${entity.tableName};`);
    await repository.query(`SET FOREIGN_KEY_CHECKS = 1;`);
  }
};
