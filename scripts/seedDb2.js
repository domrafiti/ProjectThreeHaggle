const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Haggle", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.User.updateOne(
  { _id: "60bb0b6ffc11d14d8d0430fb" },
  {
    $set: {
      listings: ["60bb0b6ffc11d14d8d0430ff", "60bb0b6ffc11d14d8d043100"],
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
  { _id: "60bb0b6ffc11d14d8d0430ff" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fb",
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
  { _id: "60bb0b6ffc11d14d8d043100" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fb",
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

db.User.updateOne(
  { _id: "60bb0b6ffc11d14d8d0430fc" },
  {
    $set: {
      listings: ["60bb0b6ffc11d14d8d043101", "60bb0b6ffc11d14d8d043102"],
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
  { _id: "60bb0b6ffc11d14d8d043101" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fc",
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
  { _id: "60bb0b6ffc11d14d8d043102" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fc",
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

db.User.updateOne(
  { _id: "60bb0b6ffc11d14d8d0430fd" },
  {
    $set: {
      listings: ["60bb0b6ffc11d14d8d043103", "60bb0b6ffc11d14d8d043104"],
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
  { _id: "60bb0b6ffc11d14d8d043103" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fd",
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
  { _id: "60bb0b6ffc11d14d8d043104" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fd",
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

db.User.updateOne(
  { _id: "60bb0b6ffc11d14d8d0430fe" },
  {
    $set: {
      listings: ["60bb0b6ffc11d14d8d043105"],
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
  { _id: "60bb0b6ffc11d14d8d043105" },
  {
    $set: {
      user_id: "60bb0b6ffc11d14d8d0430fe",
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
