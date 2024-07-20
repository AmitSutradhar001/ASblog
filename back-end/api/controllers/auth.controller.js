import { User } from "../data/mongodb.js";
import bcryptjs from "bcryptjs";

const authController = async (req, res, next) => {
  const data = req.body;
  const { email, username, password } = data;
  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "Email or password or username is missing" });
  }
  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    email,
    password: hashPassword,
    username,
  });
  try {
    await newUser.save();
    return res.status(200).json({ message: "user is created successfully!" });
  } catch (error) {
    next(error);
  }
};
export default authController;
