import { defineConfig } from "drizzle-kit";
import { config as dotenvConfig } from "dotenv";

import config from "./lib/config";

dotenvConfig({ path: ".env.local" });

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.env.databaseUrl!,
  },
});
