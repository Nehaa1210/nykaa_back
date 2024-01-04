const express = require("express");
const { connection } = require("./db");

const { userRouter } = require("./routes/user.routes");
const { productRouter } = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api/products", productRouter);



app.listen(8080, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (error) {
    console.log("Error in connection the Database.");
    console.log(error);
  }
});