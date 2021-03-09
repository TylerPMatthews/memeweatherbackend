const express = require("express");
const router = express.Router();
const Rain = require("../../models/rain/rainModel");

router.get("/", async (req, res, next) => {
  try {
    const rows = await Rain.getAllrainWeather();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Rain.getrainWeatherByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
