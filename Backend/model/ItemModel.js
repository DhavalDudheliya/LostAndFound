const mongoose = require("mongoose");
const moment = require("moment");

var ListedAt = function () {
  var d = new Date();
  var formattedDate = moment(d).format("MM-DD-YYYY, h:mm:ss a");
  return formattedDate;
};

const ItemSchema = mongoose.Schema({
  lostType: {
    type: String,
    require: [true, "Please add a lost type"],
  },
  itemName: {
    type: String,
    require: [true, "Please add a item name"],
  },
  description: {
    type: String,
    require: [true, "Please add a description"],
  },
  location: {
    type: String,
    require: [true, "Please add a Lacation"],
  },
  lostDate: {
    type: String,
    require: [true, "Please add a Lost Date"],
  },
  foundDate: {
    type: String,
    require: [true, "Please add a Lost Date"],
  },
  listedBy: {
    type: String,
    require: [true, "please add name who Listed item"],
  },
  department: {
    type: String,
    require: [true, "Please add a department"],
  },
  status: {
    type: String,
    require: [true, "Please add a satus"],
  },
  ListedAt: {
    type: String,
    default: ListedAt,
  },
});

module.exports = mongoose.model("Item", ItemSchema);