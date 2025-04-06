import config from "../../config";
import express from "express";
const compression = require("compression");
const cors = require("cors");
import mainRoutes from "../../routes";

export default function expressLoader(app: any) {
  app.get("/version", (req: any, res: any) => {
    res.json({
      version: "1.0.0",
      message: "Hello Worlds",
    });
  });
  app.get("/status", (_: any, res: any) => {
    res.status(200).json({
      uptime: process.uptime(),
      message: "Ok",
      date: new Date(),
    });
  });

  app.enable("trust proxy");
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(compression());
  app.use(`${config.api.prefix}`, mainRoutes);
}
