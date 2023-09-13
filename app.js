const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);
const userroute=require('./routes/user-route')
const homeroute = require("./routes/home-route");
require("dotenv").config();
app.use(express.json());



app.use('/api/user',userroute)

app.use('/',homeroute)


const port = process.env.PORT || 5500;
server.listen(port, () => {
  console.log(`run in port ${port}`);
});
