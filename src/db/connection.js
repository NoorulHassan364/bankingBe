const mongoose = require("mongoose");

// const DB = "mongodb://127.0.0.1:27017/banking";
// mongodb+srv://hire_Me_Private:mongohiremeprivate2022@cluster0.7pgjzbz.mongodb.net/test
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
