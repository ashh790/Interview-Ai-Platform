import type { Request, Response } from "express";
import User from "../models/user.js";

export const profileController = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      user,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};