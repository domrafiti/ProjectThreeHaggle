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
  { _id: "60c65f808e25fb39e443fe65" },
  {
    $set: {
      listings: ["60c65f808e25fb39e443fe69", "60c65f808e25fb39e443fe6a"],
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
  { _id: "60c65f808e25fb39e443fe69" },
  {
    $set: {
      user: "60c65f808e25fb39e443fe65",
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
  { _id: "60c65f808e25fb39e443fe6a" },
  {
    $set: {
      user: "60c65b89e61a4d3ddc317aee",
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
  { _id: "60c65f808e25fb39e443fe66" },
  {
    $set: {
      listings: ["60c65f808e25fb39e443fe6b", "60c65f808e25fb39e443fe6c"],
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
  { _id: "60c65f808e25fb39e443fe6b" },
  {
    $set: {
      user: "60c65f808e25fb39e443fe66",
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
  { _id: "60c65f808e25fb39e443fe6c" },
  {
    $set: {
      user: "60c65f808e25fb39e443fe66",
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
  { _id: "60c65f808e25fb39e443fe67" },
  {
    $set: {
      listings: ["60c65f808e25fb39e443fe6d", "60c65f808e25fb39e443fe6e"],
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
  { _id: "60c65f808e25fb39e443fe6d" },
  {
    $set: {
      user: "60c65f808e25fb39e443fe67",
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
  { _id: "60c65f808e25fb39e443fe6e" },
  {
    $set: {
      user: "60c65f808e25fb39e443fe67",
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
  { _id: "60c65f808e25fb39e443fe68" },
  {
    $set: {
      listings: ["60c65f808e25fb39e443fe6f"],
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
  { _id: "60c65f808e25fb39e443fe6f" },
  {
    $set: {
      user: "60c65f808e25fb39e443fe68",
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
