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
  { _id: "60be5438709b6f6bad8213e7" },
  {
    $set: {
      listings: ["60be5438709b6f6bad8213eb", "60be5438709b6f6bad8213ec"],
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
  { _id: "60be5438709b6f6bad8213eb" },
  {
    $set: {
      user: "60be5438709b6f6bad8213e7",
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
  { _id: "60be5438709b6f6bad8213ec" },
  {
    $set: {
      user: "60be5438709b6f6bad8213e7",
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
  { _id: "60be5438709b6f6bad8213e8" },
  {
    $set: {
      listings: ["60be5438709b6f6bad8213ed", "60be5438709b6f6bad8213ef"],
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
      user: "60be5438709b6f6bad8213e8",
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
      user: "60be5438709b6f6bad8213e8",
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
  { _id: "60be5438709b6f6bad8213e9" },
  {
    $set: {
      listings: ["60be5438709b6f6bad8213ef", "60be5438709b6f6bad8213f0"],
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
      user: "60be5438709b6f6bad8213e9",
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
  { _id: "60be5438709b6f6bad8213f0" },
  {
    $set: {
      user: "60be5438709b6f6bad8213e9",
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
  { _id: "60be5438709b6f6bad8213ea" },
  {
    $set: {
      listings: ["60be5438709b6f6bad8213f1"],
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
  { _id: "60be5438709b6f6bad8213f1" },
  {
    $set: {
      user: "60be5438709b6f6bad8213ea",
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
