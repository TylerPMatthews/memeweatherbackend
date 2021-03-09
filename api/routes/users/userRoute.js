const express = require("express");
const router = express.Router();
const User = require("../../models/users/userRouter");

router.get("/", async (req, res, next) => {
  try {
    const rows = await User.getAllusers();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const rows = await User.getusersByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
