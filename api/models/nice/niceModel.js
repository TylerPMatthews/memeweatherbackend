const db = require("../../data/db-config");

const getAllniceWeather = () => {
  return db("nice");
};
const getniceWeatherByID = (id) => {
  return db("nice").where("nice_id", id);
};

module.exports = {
  getAllniceWeather,
  getniceWeatherByID,
};
