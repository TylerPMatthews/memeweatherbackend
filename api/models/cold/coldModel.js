const db = require("../../data/db-config");

const getAllColdWeather = () => {
  return db("cold");
};
const getColdWeatherByID = (id) => {
  return db("cold").where("cold_id", id);
};

module.exports = {
  getAllColdWeather,
  getColdWeatherByID,
};
