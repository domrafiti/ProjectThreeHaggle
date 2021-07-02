const { User } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");

const createToken = (user) => {
  // Sign the JWT

  return jwt.sign(
    {
      sub: user.id,
      username: user.username,
      iss: "auth.dubc",
      aud: "auth.dubc",
    },
    "itsasecret",
    { algorithm: "HS256", expiresIn: "1h" }
  );
};

// Defining methods for the loginController
module.exports = {
  findOne: async function (req, res, next) {
    const { username, password } = req.body;
    const person = await User.findOne({ username });
    if (!person) {
      console.log("authPerson");
      return res.status(403).json({ message: "Wrong email or password." });
    }
    const validPassword = await bcrypt.compare(password, person.password);
    console.log(password, person.password);
    if (validPassword) {
      console.log("23");
      const { password, name, ...rest } = person;
      const userInfo = Object.assign({}, { ...rest });
      const token = createToken(person);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      console.log(
        `token: ${token}, expiresAt: ${expiresAt}, userInfo: ${userInfo}`
      );
      return res.status(200).json({
        token,
        expiresAt,
        userInfo,
        message: "Successful authentication!",
      });
    } else {
      console.log("Noope");
      return res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  },
};
