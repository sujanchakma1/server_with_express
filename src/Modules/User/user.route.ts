import { Request, Response, Router } from "express";
import { pool } from "../../config/Db";
import { userController } from "./user.controller";

const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getUser);
router.get('/:id', userController.getSingleUser )
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

export const userRoutes = router;
