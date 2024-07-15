import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRoute = Router();

authRoute.post("/signup", authController);

export default authRoute;
