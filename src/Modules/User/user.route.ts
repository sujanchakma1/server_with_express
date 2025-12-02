import { Request, Response, Router } from "express";
import { pool } from "../../config/Db";
import { userController } from "./user.controller";

const router = Router();

router.post("/", userController.createUser);

router.get("/", userController.getUser);

export const userRoutes = router;
