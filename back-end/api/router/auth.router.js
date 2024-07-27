import { Router } from "express";
import { signup, signin } from "../controllers/auth.controller.js";

const authRoute = Router();

authRoute.post("/signup", signup);
authRoute.post("/signin", signin);

export default authRoute;
