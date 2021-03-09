const db = require("../../data/db-config");

const getAllsnowWeather = () => {
  return db("snow");
};
const getsnowWeatherByID = (id) => {
  return db("snow").where("snow_id", id);
};

module.exports = {
  getAllsnowWeather,
  getsnowWeatherByID,
};
