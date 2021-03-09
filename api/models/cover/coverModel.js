const db = require("../../data/db-config");

const getAllCoverWeather = () => {
  return db("cover");
};
const getCoverWeatherByID = (id) => {
  return db("cover").where("cover_id", id);
};

module.exports = {
  getAllCoverWeather,
  getCoverWeatherByID,
};
