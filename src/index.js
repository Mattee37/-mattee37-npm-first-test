const axios = require("axios");

const users = async (c = 1) => {
  if (typeof c !== "number") {
    throw new Error("The value is not a number.");
  }
  const r = await axios.get(
    `https://jsonplaceholder.typicode.com/users?_limit=${c}`
  );
  return r.data;
};

const PI = 3.1415;

const f = async () => {
  const r = await users("a");
  console.log(r);
};
f();

module.exports = { users, PI };
