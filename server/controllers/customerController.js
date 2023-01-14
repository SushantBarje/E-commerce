var connectdb = require("../databases/dbconnection");
const bycrpt = require("bcryptjs");
const auth = require("../middleware/auth");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.getProductsList = async () => {
  try {
    const connectd = await connectdb;
    var query = "SELECT * from products";
    const [rows, fields] = await connectd.execute(query);
    return { statusCode: 200, error: "none", message: rows };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      error: "none",
      message: `Internal Server Error: ${err}`,
    };
  }
};

exports.getProductById = async (id) => {
  try {
    var query = "SELECT * from products where product_id = ?";
    const [rows, fields] = await (await connectdb).execute(query, [id]);
    return { statusCode: 200, error: "none", message: rows };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      error: "none",
      message: `Internal Server Error: ${err}`,
    };
  }
};
