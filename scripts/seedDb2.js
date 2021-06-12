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
  { _id: "60c02a1638bb5668a5e789c7" },
  {
    $set: {
      listings: ["60c02a1638bb5668a5e789cb", "60c02a1638bb5668a5e789cc"],
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
  { _id: "60c02a1638bb5668a5e789cb" },
  {
    $set: {
      user: "60c02a1638bb5668a5e789c7",
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
  { _id: "60c02a1638bb5668a5e789cc" },
  {
    $set: {
      user: "60c02a1638bb5668a5e789c7",
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
  { _id: "60c02a1638bb5668a5e789c8" },
  {
    $set: {
      listings: ["60c02a1638bb5668a5e789cd", "60c02a1638bb5668a5e789ce"],
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
  { _id: "60be5438709b6f6bad8213ed" },
  {
    $set: {
      user: "60c02a1638bb5668a5e789cd",
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
  { _id: "60be5438709b6f6bad8213ef" },
  {
    $set: {
      user: "60c02a1638bb5668a5e789ce",
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
  { _id: "60c02a1638bb5668a5e789c9" },
  {
    $set: {
      listings: ["60c02a1638bb5668a5e789cf", "60c02a1638bb5668a5e789d0"],
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
  { _id: "60c02a1638bb5668a5e789cf" },
  {
    $set: {
      user: "60c02a1638bb5668a5e789c9",
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
  { _id: "60c02a1638bb5668a5e789d0" },
  {
    $set: {
      user: "60c02a1638bb5668a5e789c9",
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
  { _id: "60c02a1638bb5668a5e789ca" },
  {
    $set: {
      listings: ["60c02a1638bb5668a5e789d1"],
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
      user: "60c02a1638bb5668a5e789ca",
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
