const express = require("express");
const router = express.Router();
const Snow = require("../../models/snow/snowModel");

router.get("/", async (req, res, next) => {
  try {
    const rows = await Snow.getAllsnowWeather();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Snow.getsnowWeatherByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
