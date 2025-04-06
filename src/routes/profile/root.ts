import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.send("Hello Profile");
});

export default router;
