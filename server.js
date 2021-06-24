const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
require("dotenv").config();
const logger = require("morgan");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.get("/api", (req, res, next) => {
//   res.send("API Status: I'm awesome");
// });


// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No user exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.send("Successfully authenticated");
//         console.log(req.user);
//       });
//     }
//   })(req, res, next);
// });
// app.post("/api/users", (req, res) => {
//   console.log("first place");
//   User.findOne({ username: req.body.username }, async (err, doc) => {
//     console.log("Second place");
//     if (err) throw err;
//     if (doc) res.send("User already exists");
//     if (!doc) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

//       const newUser = new User({
//         name: req.body.name,
//         username: req.body.username,
//         password: hashedPassword,
//       });
//       console.log("Third place");
//       await newUser.save();
//       res.send("User created");
//     }
//   });
// });
// app.post("/user", (req, res) => {
//   res.send(req.user);
// });

// app.post("/send", async (req, res) => {
//   const msg = {
//     to: "brice.huisken@gmail.com",
//     from: "haggleinc@gmail.com",
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };
//   try {
//     await sgMail.send(msg);
//     console.log("something");
//     return;
//   } catch (error) {
//     console.error(error);
//     if (error.response) {
//       console.error(error.response.body);
//     }
//     res.redirect("back");
//   }
// });
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Haggle",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Mongoose is connected!");
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
