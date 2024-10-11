const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./router/userRouter");

dotenv.config();
// rest object
const app = express();
// app.use(express.static(join(__dirname, "build")));

// middlewares
app.use(cors());

app.use(express.json());

// routes
app.use("/api/v1/user", userRouter);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// app.get("*", (req, res, next) => {
//   if (req.url.startsWith("/api")) {
//     return next();
//   }

//   // Otherwise, serve the React HTML file
//   res.sendFile(join(__dirname, "build", "index.html"));
// });

// PORT
const PORT = process.env.PORT || 8282;

// zipLogs();
// run listen
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
