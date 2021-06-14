const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Haggle", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Start DOM
db.User.updateOne(
  { _id: "60c6955044b993723402277a" },
  {
    $set: {
      listings: ["60c6955044b993723402277e", "60c6955044b993723402277f"],
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c6955044b993723402277e" },
  {
    $set: {
      user: "60c6955044b993723402277a",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c6955044b993723402277f" },
  {
    $set: {
      user: "60c6955044b993723402277a",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Start Giovany

db.User.updateOne(
  { _id: "60c6955044b993723402277b" },
  {
    $set: {
      listings: ["60c6955044b9937234022780", "60c6955044b9937234022781"],
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c6955044b9937234022780" },
  {
    $set: {
      user: "60c6955044b993723402277b",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c6955044b9937234022781" },
  {
    $set: {
      user: "60c6955044b993723402277b",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Start Keith

db.User.updateOne(
  { _id: "60c6955044b993723402277c" },
  {
    $set: {
      listings: ["60c6955044b9937234022782", "60c6955044b9937234022783"],
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c6955044b9937234022782" },
  {
    $set: {
      user: "60c6955044b993723402277c",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c6955044b9937234022783" },
  {
    $set: {
      user: "60c6955044b993723402277c",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Start Brice

db.User.updateOne(
  { _id: "60c6955044b993723402277d" },
  {
    $set: {
      listings: ["60c6955044b9937234022784"],
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Listings.updateOne(
  { _id: "60c02a1638bb5668a5e789d1" },
  {
    $set: {
      user: "60c6955044b9937234022784",
    },
  }
)
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
