"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Alex",
          email: "a@a.com",
          password: bcrypt.hashSync("alex", 10),
        },
        {
          name: "Karla",
          email: "k@k.com",
          password: bcrypt.hashSync("karla", 10),
        },
        {
          name: "Swen",
          email: "s@s.com",
          password: bcrypt.hashSync("swen", 10),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
