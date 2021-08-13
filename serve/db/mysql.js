const mysql = require("mysql")

class mysql{
  getConn() {
    const connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "123456",
      database: "mydiary"
    });
    connection.connect();
    return connection;
  }
}

module.exports = mysql;





