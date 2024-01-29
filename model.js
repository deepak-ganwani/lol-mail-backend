const mongoose = require("mongoose");
const MailSchema = mongoose.Schema({
  s_name: {
    type: String,
    default: "",
  },
  s_mail: {
    type: String,
    default: "",
  },
  r_name: {
    type: String,
    default: "",
  },
  r_mail: {
    type: String,
    default: "",
  },
  subject: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});

const mailModel = mongoose.model("Data", MailSchema);
module.exports = mailModel;