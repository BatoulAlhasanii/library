import "dotenv/config";
import { clearDB, initDB } from "./dbutil";

beforeAll(async () => {
  await initDB();
});

afterAll(async () => {
  await clearDB();
});

beforeEach(async () => {
  await clearDB();
});
