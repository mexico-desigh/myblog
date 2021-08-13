const http = require("http");
const express = require("express");
const app = express();
app.listen(8081)

// app.use(express.static("../../client"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',require("./api"))