import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.send("Hello Profile");
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  res.send({ name, email, password });
});

router.put("/", (req, res) => {
  res.send("Hello Profile");
});

export default router;
