const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

var nodemailer = require("nodemailer");

const mongoUrl = "mongodb+srv://admin:vainavi@cluster0.9avwt4l.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./users");

const User = mongoose.model("UserInfo");
app.get("", async (req, res) => {
  const { host,clientId, port, username, password} = req.body;
    await User.create({
    host,
    clientId,
    port,
    username,
    password
    });
    res.send({ status: "ok" });
});

app.listen(5000, () => {
  console.log("Server Started");
});
