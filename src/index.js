const axios = require("axios");

const users = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=2"
  );
  return res.data;
};

const PI = 3.1415;

module.exports = { users, PI };
