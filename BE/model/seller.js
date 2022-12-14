const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sellerSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

sellerSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

sellerSchema.methods.passwordVerification = async function (password) {
  try {
    const passVerify = await bcrypt.compare(password, this.password);
    if (passVerify) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

sellerSchema.methods.generateToken = async function () {
  try {
    const token = await jwt.sign(
      { _id: this._id },
      "helloamitkumarshubhamsahoo",
      {
        expiresIn: "1d",
      }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};
const Seller = mongoose.model("sellers", sellerSchema);

module.exports = Seller;
