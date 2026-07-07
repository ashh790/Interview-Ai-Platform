import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const register = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide name, email and password",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPass,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const login = async (req: Request, res: Response)=>{
  try {
    const {email,password} = req.body;
    if(!email || !password){
      return res.status(400).json({
        message: "Please provide email and password"
      });
    }
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({
        message: "User not found"
      });
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }
     const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};