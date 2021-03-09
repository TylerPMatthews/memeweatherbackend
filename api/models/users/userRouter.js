const db = require("../../data/db-config");

const getAllusers = () => {
  return db("users");
};
const getusersByID = (id) => {
  return db("users").where("user_id", id);
};

module.exports = {
  getAllusers,
  getusersByID,
};
