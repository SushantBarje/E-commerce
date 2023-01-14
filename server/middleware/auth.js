var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateAccessToken = (user) => {
  console.log("user");
  console.log(process.env.ACCESS_TOKEN_SECRET);
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" });
};

exports.generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "10s" });
};

exports.verfiyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (!token) {
      res
        .status(404)
        .json({ error: "token null", message: "You are not authorized" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.error(err);
        res
          .status(403)
          .json({ error: "token expire", message: "Token not valid" });
      } else {
        req.user = user;
        next();
      }
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal", message: `Internal Server Error ${err}` });
  }
};
