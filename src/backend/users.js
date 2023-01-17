const mongoose = require("mongoose");
const UserScehma = new mongoose.Schema(
  {
    host: String,
     clientId:String,
     port:String,
     username:String,
     password:String,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserScehma);