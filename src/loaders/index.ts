import expressLoader from "./express";
import Logger from "@/services/logger";
import mongooseLoader from "@/loaders/mongoose";
// import { EventEmitter } from "@/services";

export default async function init(app: any) {
  await mongooseLoader();
  Logger.info("👍🏻 Mongo DB loaded and connected!");

  //   EventEmitter.start();
  //   Logger.info("👍🏻 Event Emitter Started!");

  expressLoader(app);
  Logger.info("👍🏻 Express app loaded!");
}
