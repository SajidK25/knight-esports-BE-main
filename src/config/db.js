const mongoose = require("mongoose");
const caCertificatePath = 'X509-cert-5395350927322369437.pem';
const connectMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(`${process.env.MONGO_URI}`, {
      useNewURLParser: true,
      useUnifiedTopology: true,
      sslCA: require('fs').readFileSync(caCertificatePath),
    })
    .then((conn) => {
      console.log(`Connected to: ${conn.connection.host}!`);
    });
};

module.exports = { connectMongo };