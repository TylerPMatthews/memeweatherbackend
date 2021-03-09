const express = require("express");
const router = express.Router();
const Cold = require("../../models/cold/coldModel");

router.get("/", async (req, res, next) => {
  try {
    const rows = await Cold.getAllColdWeather();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Cold.getColdWeatherByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
