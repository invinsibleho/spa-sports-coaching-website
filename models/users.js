const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    classType: String,
    level: String,
    preferedChoice: {
      preferredChoice1st: {
        userLocation: String,
        date: String,
        time: String,
      },
      preferredChoice2nd: {
        userLocation: String,
        date: String,
        time: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
