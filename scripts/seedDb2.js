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
  { _id: "60bbb622327efa38ad75ce94" },
  {
    $set: {
      listings: ["60bbb622327efa38ad75ce98", "60bbb622327efa38ad75ce99"],
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
  { _id: "60bbb622327efa38ad75ce98" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce94",
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
  { _id: "60bbb622327efa38ad75ce99" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce94",
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
  { _id: "60bbb622327efa38ad75ce95" },
  {
    $set: {
      listings: ["60bbb622327efa38ad75ce9a", "60bbb622327efa38ad75ce9b"],
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
  { _id: "60bbb622327efa38ad75ce9a" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce95",
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
  { _id: "60bbb622327efa38ad75ce9b" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce95",
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
  { _id: "60bbb622327efa38ad75ce96" },
  {
    $set: {
      listings: ["60bbb622327efa38ad75ce9c", "60bbb622327efa38ad75ce9d"],
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
  { _id: "60bbb622327efa38ad75ce9c" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce96",
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
  { _id: "60bbb622327efa38ad75ce9d" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce96",
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
  { _id: "60bbb622327efa38ad75ce97" },
  {
    $set: {
      listings: ["60bbb622327efa38ad75ce9e"],
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
  { _id: "60bbb622327efa38ad75ce9e" },
  {
    $set: {
      user: "60bbb622327efa38ad75ce97",
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
