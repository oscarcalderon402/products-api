import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://oscarUalett:guitarra2@cluster0.e1gib.mongodb.net/company",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((db) => console.log("Db is connected"))
  .then((error) => console.log(error));
