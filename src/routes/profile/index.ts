import { Router } from "express";
import root from "./root";

const router = Router({ mergeParams: true });

router.use("/", root);

export default router;
