const { User } = require("../models");

const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const { deleteOne } = require("../models/user");


// Defining methods for the loginController
module.exports = {
    findOne: async function (req, res, next) {
        const { username, password } = req.body
        console.log("What we want to know: " + username)
        console.log(User)
        const person = await User.findOne({ username })
        console.log(person)
        if (!person) return done(null, false);
        console.log("two two")
        const validPassword = await bcrypt.compare(password, person.password)
        console.log(validPassword);
        // (err, result) => {
        //     if (err) {
        //         throw err;
        //         console.log(err)
        //     }
        //     if (result === true) {
        //         return done(null, user)
        //     } else {
        //         return done(null, false);
        //     }
        // }


        // User.find({ username }, (err, user, info) => {
        //     console.log("the end")
        //     if (err) throw err;
        //     if (!user) return done(null, false);
        //     bcrypt.compare(password, password, (err, result) => {
        //         if (err) throw err;
        //         if (result === true) {
        //             return done(null, user)
        //         } else {
        //             return done(null, false);
        //         }
        //     })
        // })(req, res, next);
    },
};
