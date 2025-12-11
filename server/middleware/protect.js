import jwt from "jsonwebtoken";
import User from "../models/UserModel.js"; 

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ error: "You must be logged in to save a booking." });

    const token = authHeader.split(" ")[1];

    if (!token)
      return res.status(401).json({ error: "You must be logged in to save a booking." });

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");

    
    const user = await User.findById(decoded.id).select("-password");

    if (!user)
      return res.status(401).json({ error: "User not found" });

    req.user = user;  

    next();
  } catch (err) {
    console.error("JWT Error:", err);
    return res.status(401).json({ error: "Invalid token. Please log in again." });
  }
};
