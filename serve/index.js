const express = require("express")
const app = express();
app.listen(8081)

// app.use(express.static("../../client"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/login",(req,res) => {
  console.log(req.query);
  res.send("success");
})