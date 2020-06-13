const axios = require("axios");

const PI = 3.1415;

const users = async (c = 1) => {
  if (typeof c === "number") {
    const r = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_limit=${c}`
    );
    return r.data;
  } else {
    throw new Error("The value is not a number.");
  }
};

const f = async () => {
  const r = await users(4);
  console.log(r);
};
f();

module.exports = { users, PI };
