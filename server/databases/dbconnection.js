const mysql = require("mysql2/promise");
const util = require("util");
const bluebird = require("bluebird");
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "ecommerce",
  Promise: bluebird,
};

// class ConnectDb {
//   static async connectdb() {
//     try {
//       if (!this.db) {
//         // to test if credentials are correct
//         await mysql.createConnection(dbConfig);
//         const pool = mysql.createPool(dbConfig);
//         // now get a Promise wrapped instance of that pool
//         const promisePool = pool.promise();
//         this.db = promisePool;
//       }
//       return this.db;
//     } catch (err) {
//       console.log("Error in database connection");
//       console.log(err.errro || err);
//     }
//   }
// }

// module.exports = ConnectDb;

async function connectdb() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@123",
    database: "ecommerce",
  });
}

module.exports = connectdb();
