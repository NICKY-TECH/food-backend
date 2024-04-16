const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const mongoose = require("mongoose");

const Db = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.mongoUrl)
    .then(() => {
      console.log("running");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = Db;