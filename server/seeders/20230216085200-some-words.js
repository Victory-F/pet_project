"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "words",
      [
        {
          foreign: "cat",
          native: "кіт",
          progress: 20,
          vocabularyId: 3,
          categoryId: 1,
        },
        {
          foreign: "dog",
          native: "собака",
          progress: 40,
          vocabularyId: 3,
          categoryId: 1,
        },
        {
          foreign: "bird",
          native: "птах",
          progress: 60,
          vocabularyId: 3,
          categoryId: 1,
        },
        {
          foreign: "horse",
          native: "кінь",
          progress: 80,
          vocabularyId: 3,
          categoryId: 1,
        },
        {
          foreign: "animal",
          native: "тварина",
          progress: 0,
          vocabularyId: 3,
          categoryId: 1,
        },
        {
          foreign: "rabbit",
          native: "кролик",
          progress: 0,
          vocabularyId: 3,
          categoryId: 1,
        },
        {
          foreign: "bread",
          native: "хліб",
          progress: 20,
          vocabularyId: 3,
          categoryId: 3,
        },
        {
          foreign: "butter",
          native: "масло",
          progress: 20,
          vocabularyId: 3,
          categoryId: 3,
        },
        {
          foreign: "jam",
          native: "варення",
          progress: 40,
          vocabularyId: 3,
          categoryId: 3,
        },
        {
          foreign: "honey",
          native: "мед",
          progress: 20,
          vocabularyId: 3,
          categoryId: 3,
        },
        {
          foreign: "cheese",
          native: "сир",
          progress: 20,
          vocabularyId: 3,
          categoryId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("words", null, {});
  },
};
