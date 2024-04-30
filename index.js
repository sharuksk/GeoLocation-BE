const express = require("express");
const app = express();
const http = require("https");
const axios = require("axios");
var qs = require("querystring");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const router = require("./routes/routers");
const mongoose = require("mongoose");
const cors = require("cors")
const db ="mongodb+srv://sharukajmal2:sharukdb@cluster0.cfzoga8.mongodb.net/GeoLocation"
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const url = "mongodb+srv://sharukajmal2:sharukdb@cluster0.cfzoga8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    })
);
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/dashboard", router);


app.use(bodyParser.json());
app.listen(port, () => {
  console.log("app is rendereing", port);
});