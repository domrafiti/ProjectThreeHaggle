const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  ""
);
const express = require("express");
const router = express.Router();

router.post("/send", async (req, res) => {
  console.log("HELLLLO");
  const msg = {
    to: "brice.huisken@gmail.com",
    from: "haggleinc@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  try {
    await sgMail.send(msg);
    res.redirect("/?interest=sent");
    return;
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.redirect("back");
  }
});

module.exports = router;
