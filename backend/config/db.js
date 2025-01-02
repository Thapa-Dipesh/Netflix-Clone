import mongoose from "mongoose";

function connectToDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(function () {
      console.log("Connected to DB 👋");
    })
    .catch(function (err) {
      console.log(err);
    });
}

export default connectToDb;
