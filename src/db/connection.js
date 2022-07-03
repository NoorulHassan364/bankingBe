const mongoose = require("mongoose");

const DB =
  "mongodb+srv://banking:banking@cluster0.bbdjt0q.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB successfully connected!");
  })
  .catch((err) => {
    console.log(err);
  });
