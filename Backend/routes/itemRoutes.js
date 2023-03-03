const express = require("express");
const router = express.Router();

const { protectCoordinator } = require("../middlewares/auth_coordinator");
const { protectStudent } = require("../middlewares/auth_student");

const {
  storeFoundItem,
  storeLostItem,
} = require("../controllers/itemController");

router.post("/storeFounditems", protectCoordinator, storeFoundItem);

router.post("/storeLostitems", protectStudent, storeLostItem);

module.exports = router;
