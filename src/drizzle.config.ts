import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./db/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.TURSO_ENDPOINT_URL!,
  },
  verbose: true,
  strict: true,
});
