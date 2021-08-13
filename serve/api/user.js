const express = require(express);
const router = express.router();

const mysql = require("../db/mysql");
const sql = require("../sqlMap");

// 增加用户、
router.get("/user",(req,res) => {
  let sqlStr = sql.user.add;
  let params = req.query;
  let conn = new mysql().getConn();
  conn.query(sqlStr,[params.name,params.pwd],(err,res) => {
    if(err) {
      console.log("err",err);
      return;
    }else {
      res.send(res);
    }
  });
  conn.send();
})