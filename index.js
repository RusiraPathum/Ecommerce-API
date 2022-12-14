const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//   app.get('/api/test', () => {
//     console.log("Hi Test 01");
//   });

app.use(express.json());

//Auth routes
app.use('/api/auth', authRoutes);

app.use('/api/user', userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
