const express = require("express");
const router = express.Router();
const Nice = require("../../models/nice/niceModel");

router.get("/", async (req, res, next) => {
  try {
    const rows = await Nice.getAllniceWeather();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Nice.getniceWeatherByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
