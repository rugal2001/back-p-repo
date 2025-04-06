import path from "path";
import dotenv from "dotenv";

type EnvT = "development" | "production" | "local";

// Set default environment
process.env.API_ENV = process.env.API_ENV || "development";

// Load environment variables from the appropriate file
const envFile =
  process.env.API_ENV === "production"
    ? ".env"
    : process.env.API_ENV === "local"
    ? ".dev.env"
    : ".dev.env";

dotenv.config({
  path: path.resolve(process.cwd(), envFile),
});

interface configInterface {
  port: number;
  env: EnvT;
  frontbaseURL: string;
  frontbaseAppURL: string;
  backendURL: string;
  databaseURL: string;
  redisURI: string;
  api: {
    prefix: string;
  };
}

const config: configInterface = {
  port: parseInt(process.env.PORT || "60001", 10),
  env: (process.env.API_ENV as EnvT) || "development",
  frontbaseURL: process.env.FRONT_URL || "",
  frontbaseAppURL: process.env.FRONT_APP_URL || "",
  backendURL: process.env.BACKEND_URL || "",
  databaseURL: process.env.MONGODB_URI || "",
  redisURI: process.env.REDIS_URI || "",
  api: {
    prefix: "/api/v0",
  },
};

export default config;
