import "reflect-metadata";
import { DataSource } from "typeorm";
import { ProfileData } from "@/entity/ProfileData";
import driver from "sqlite3";

export const AppDataSource = new DataSource({
  type: "sqlite",
  driver,
  database: "./dev.db",
  entities: [ProfileData],
  synchronize: true,
  logging: false,
});
