const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/db");
const { router } = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Cointab team!!!");
});

app.use('/api/users', router)

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
  console.log(`Server is running on port ${port}`);
});
