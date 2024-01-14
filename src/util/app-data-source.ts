import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [__dirname + "/../database/migrations/*{.ts,.js}"],
  entities: [__dirname + "/../models/*.{ts,js}"],
  logging: false,
  synchronize: true,
  extra: {
    charset: "utf8mb4_unicode_ci",
  },
});

