var connectdb = require("../databases/dbconnection");
const bycrpt = require("bcryptjs");
const auth = require("../middleware/auth");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.verifyLogin = async (user) => {
  const { username, password } = user;

  try {
    const connectd = await connectdb;
    const query = "SELECT * from users WHERE username = ?";
    const [rows, fields] = await connectd.execute(query, [username]);

    if (
      !(
        rows[0].username == username &&
        (await bycrpt.compare(password, rows[0].password))
      )
    ) {
      return {
        statusCode: 402,
        error: "402",
        message: "Invalid username or password",
      };
    }
    console.log("acc");
    const accessToken = auth.generateAccessToken({
      userId: rows[0].id,
      username,
    });
    const refreshToken = auth.generateRefreshToken({
      userId: rows[0].id,
      username,
    });

    return {
      statusCode: 200,
      error: "none",
      message: { accessToken: accessToken, refreshToken: refreshToken },
      userid: rows.id,
    };
  } catch (err) {
    return {
      statusCode: 500,
      error: "500",
      message: `Internal Server Error:${err}`,
    };
  }
};

exports.signUpUser = async (user) => {
  const { firstname, lastname, username, password } = user;
  try {
    const connectd = await connectdb;
    var query = "SELECT * from users WHERE username = ?";
    var [rows, fields] = await connectd.execute(query, [username]);
    if (rows.length > 0) {
      return {
        statusCode: 400,
        error: "exists",
        message: "User already exists.",
      };
    }

    const hashPassword = await bycrpt.hash(password, 10);

    query =
      "INSERT INTO users(username, password, first_name, last_name) VALUES(?,?,?,?)";

    const result = await connectd.execute(query, [
      username,
      hashPassword,
      firstname,
      lastname,
    ]);
    return { statusCode: 200, error: "none", message: "Singin Succesfully" };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      error: "internal",
      message: `Internal Server Error:${err}`,
    };
  }
};

exports.getRefreshToken = async (user) => {
  const { username, refreshToken } = user;
  console.log(refreshToken);
  try {
    const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    if (decode.username !== username) {
      return {
        statusCode: 401,
        error: "authorization",
        message: "Invalid User, try login again",
      };
    }

    const accessToken = auth.generateAccessToken({ username });
    const retoken = auth.generateRefreshToken({ username });

    return {
      statusCode: 200,
      error: "none",
      message: { accessToken: accessToken, refreshToken: retoken },
    };
  } catch (err) {
    return {
      statusCode: 401,
      error: "token",
      message: `Token Expired:${err}`,
    };
  }
};
