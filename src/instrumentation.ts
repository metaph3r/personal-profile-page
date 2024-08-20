import { AppDataSource } from "./lib/data-source";

export async function register() {
  await AppDataSource.initialize();
}
