import jwt from "jsonwebtoken";
import "dotenv/config";
import HandleError from "./HandleError.js";

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; //Bearer token
  if (!token)
    return res.status(401).json({ auth: false, message: "Unauthorized!" });
  try {
    const decode = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    req.user = decode;
    next();
  } catch (err) {
    console.log("Token verification failed!", err);
    res.status(403).json({ auth: false, message: "Forbidden Access!" });
  }
};

export const generateTokens = (payload) => {
  const currentTime = new Date().getTime();
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
    expiresIn: "1w",
  });
  return { accessToken, refreshToken, currentTime };
};

export const refreshAccessToken = async (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) {
    return res.status(401).json({ message: "No token provided!" });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
    const payload = {
      userId: decoded.userId,
      email: decoded.email,
      isAdmin: decoded.isAdmin,
    };
    const { accessToken } = generateTokens(payload);
    return res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    HandleError(res, err);
  }
};
