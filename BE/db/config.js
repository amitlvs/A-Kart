const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://amitlvs:Bullet@500@cluster0.9sg50up.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connecction successful");
  })
  .catch((err) => {
    console.log("reached");
    console.log(err);
  });
require("../model/seller");
