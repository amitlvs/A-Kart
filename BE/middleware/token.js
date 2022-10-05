const jwt = require("jsonwebtoken");
const Seller = require("../model/seller");

const authToken = async (req, res, next) => {
  try {
    let token;
    if (req.headers && req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
      const verifyToken = await jwt.verify(token, "helloamitkumarshubhamsahoo");
      console.log(verifyToken);
      req.Seller = await Seller.findById(verifyToken._id);

      if (verifyToken) {
        next();
      } else {
        res.status(400).json({ message: "Not authorised" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Not Authorized" });
  }
};

module.exports = authToken;
