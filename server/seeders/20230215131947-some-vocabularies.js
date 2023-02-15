"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vocabularies",
      [
        {
          title: "My English/Spanish Vocabulary",
          userId: 1,
        },
        {
          title: "My English/French Vocabulary",
          userId: 1,
        },
        {
          title: "My English/Italian Vocabulary",
          userId: 2,
        },
        {
          title: "My Dutch/Ukrainian Vocabulary",
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vocabularies", null, {});
  },
};
