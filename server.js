// const path = require("path");
// const express = require("express");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const connectDB = require("./config/db");
// const fileupload = require("express-fileupload");
// const cookieParser = require("cookie-parser");
// const errorHandler = require("./middlewares/error");
// const colors = require("colors");
// const session = require("express-session");

// // Load env vars
// dotenv.config({ path: "./config/config.env" });

// // Connect to database
// connectDB();

// // Route files
// const products = require("./routes/products");
// const auth = require("./routes/auth");
// const cart = require("./routes/cart");

// const app = express();

// // Session

// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 1000 * 60 * 60 * 1000 }
//   })
// );

// // Body parser
// app.use(express.json());

// // Cookie parser
// app.use(cookieParser());

// // Dev loggin middleware
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// // File uploading
// app.use(fileupload());

// // Set static folder
// app.use(express.static(path.join(__dirname, "public")));

// // Moute routers
// app.use("/api/products", products);
// app.use("/api/auth", auth);
// app.use("/api/cart", cart);

// app.get("/", (req, res) => {
//   res.send("Helslo");
// });

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// const server = app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
//       .yellow.bold
//   )
// );

// // Handle unhandled promise rejections
// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Error: ${err.name}`.red);
//   // Close server and axit process
//   server.close(() => process.exit(1));
// });

const dns = require('dns');
const os = require('os');
const Visitor = require('./models/visitor');
async function counting() {
  try {
    dns.lookup(os.hostname(), async function (err, ip, fam) {
      console.log(ip)
    })
  } catch (error) {
  }
}
counting();