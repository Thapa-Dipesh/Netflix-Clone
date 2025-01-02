import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({ message: "Invalid Data", success: false });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ message: "Email is already registered", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    return res
      .status(200)
      .json({ message: "Account created Successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ message: `Welcome back ${user.fullName}`, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({ message: "User Logged Out", success: true });
};
