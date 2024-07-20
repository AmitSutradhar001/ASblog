import express from "express";
import "dotenv/config";
import userRouter from "./router/user.router.js";
import authRoute from "./router/auth.router.js";
import cors from "cors";

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errMessage = err.message || "Internal Server Error!";
  return res.status(statusCode).json({
    success: false,
    message: errMessage,
    statusCode,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
