import { User } from "../data/mongodb.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return next({
      status: 400,
      message: "Email, username, or password is missing",
    });
  }

  try {
    const validUser = await User.findOne({ email });

    if (validUser) {
      return next({ status: 409, message: "User already exist!" });
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      email,
      password: hashPassword,
      username,
    });

    await newUser.save();
    return res.status(201).json({ message: "User is created successfully!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    });
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({ status: 400, message: "All fields are required!" });
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next({ status: 404, message: "User not found!" });
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next({ status: 400, message: "Invalid Password!" });
    }
    validUser.password = "pass";
    console.log(validUser);
    const token = jwt.sign({ validUser }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ access_token: token, message: "Signed in successfully!" });
  } catch (error) {
    return next({
      status: error.status || 500,
      message: error.message || "Internal Server Error!",
    });
  }
};
