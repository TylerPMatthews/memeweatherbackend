const db = require("../../data/db-config");

const getAllrainWeather = () => {
  return db("rain");
};
const getrainWeatherByID = (id) => {
  return db("rain").where("rain_id", id);
};

module.exports = {
  getAllrainWeather,
  getrainWeatherByID,
};
