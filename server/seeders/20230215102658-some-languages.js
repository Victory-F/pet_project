"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "languages",
      [
        {
          title: "English (United States)",
          code: "en-US",
        },
        {
          title: "English (United Kingdom)",
          code: "en-GB",
        },
        {
          title: "Spanish (Spain)",
          code: "es-ES",
        },
        {
          title: "Dutch (Netherlands)",
          code: "nl-NL",
        },
        {
          title: "Ukrainian (Ukraine)",
          code: "uk-UA",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("languages", null, {});
  },
};
