import { Router } from "express";
import profile from "./profile";

const router = Router({ mergeParams: true });

router.use("/profile", profile);

export default router;
