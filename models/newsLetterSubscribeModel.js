const mongoose = require("mongoose");

const newsLetterSubscribeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("NewsLetterSubscribe", newsLetterSubscribeSchema);
