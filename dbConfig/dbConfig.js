let mongoose = require("mongoose");
let dbpath = process.env.MONGO_URL;
const connectToMongo = async () => {
  mongoose.connect(
    dbpath,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    await console.log("database connection successfully")
  );
};
connectToMongo();

///   No Needs    ///

//   mongoose.connect(
//     dbpath,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err, connectedClient) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("database connection successfully");
//       }
//     }
//   );
