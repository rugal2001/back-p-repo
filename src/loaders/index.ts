import expressLoader from "./express";
import Logger from "../services/logger";

export default function init(app: any) {
  expressLoader(app);
  Logger.info("✅ Express app loaded!");
}
