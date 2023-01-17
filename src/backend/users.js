const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema(
  {
    addr:String,
    port:String,
    clid:String,
    username:String,
    passwd:String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserScehma);