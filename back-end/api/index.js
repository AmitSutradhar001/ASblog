import express from "express";
import "dotenv/config";
import cors from "cors";

import userRouter from "./router/user.router.js";
import authRouter from "./router/auth.router.js";
import notFound from "../middleware/notFound.js";
import err from "../middleware/err.js";

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Error handling middleware
app.use(notFound); // Handle 404 errors
app.use(err); // Handle other errors

// Server setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
