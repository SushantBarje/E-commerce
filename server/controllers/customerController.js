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

exports.orderProduct = async (id, userId) => {
  try {
    var query = "SELECT * from products where product_id = ?";
    var [rows, fields] = await (await connectdb).execute(query, [id]);
    if (!rows) {
      return {
        statusCode: 404,
        error: "not found",
        message: "Product Not found",
      };
    }
    query = "INSERT INTO orders(user, product_id, no_of_units, status) VALUES(?,?,?,?)";
    [rows] = await (await connectdb).execute(query, [userId, id, 1, "placed"]);
    return {
      statusCode: 200,
      error: "none",
      message: `Order Placed!\nOrder Id: ${rows.insertId}`,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      error: "none",
      message: `Internal Server Error: ${err}`,
    };
  }
};

exports.getMyOrders = async (userId) => {
  try {
    var query = "SELECT * from orders WHERE user = ?";
    const [rows, fields] = await (await connectdb).execute(query, [userId]);
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
