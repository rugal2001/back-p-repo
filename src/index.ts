import express from "express";
import config from "./config";
import Loaders from "./loaders";

async function start() {
  const app = express();
  await Loaders(app);
  app.listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

start();
