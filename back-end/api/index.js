import express from "express";
import "dotenv/config";
import userRouter from "./router/user.router.js";
import authRoute from "./router/auth.router.js";

const PORT = 8080;
const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
