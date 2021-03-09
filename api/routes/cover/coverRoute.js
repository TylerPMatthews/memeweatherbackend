const express = require('express');
const router = express.Router();
const Cover = require('../../models/cover/coverModel');

router.get("/", async (req, res, next) => {
    try {
      const rows = await Cover.getAllCoverWeather();
      res.status(200).json(rows);
    } catch (e) {
      next(e);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const rows = await Cover.getCoverWeatherByID(req.params.id);
      res.status(200).json(rows);
    } catch (e) {
      next(e);
    }
  });
  
module.exports = router;