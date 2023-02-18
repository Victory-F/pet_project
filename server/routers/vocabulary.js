const { Router } = require("express");

const { vocabulary, language, word, category } = require("../models");

const authMiddleware = require("../auth/middleware");

const router = new Router();

// Get all Vocabularies
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    // user making request
    const userId = parseInt(req.user.dataValues.id);

    // find all vocabularies
    const allVocabularies = await vocabulary.findAll({
      where: { userId: userId },
      include: [
        {
          model: language,
          attributes: ["title", "code"],
        },
      ],
    });

    // send all vocabularies
    return res.status(200).send(allVocabularies);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Get all Words in Vocabulary
router.get("/:id", authMiddleware, async (req, res, next) => {
  try {
    // user making request
    const userId = parseInt(req.user.dataValues.id);
    // vocabulary id
    const vocabularyId = parseInt(req.params.id);

    //find vocabulary by id where user is owner
    const vocabById = await vocabulary.findByPk(vocabularyId, {
      where: { userId: userId },
    });

    // check if user has the vocabulary
    if (!vocabById) {
      return res.status(404).send({ message: "Not found" });
    }

    // find all words in vocabulary
    const allWordsInVocab = await word.findAll({
      where: { vocabularyId: vocabularyId },
      include: [
        {
          model: category,
          attributes: ["title"],
        },
        {
          model: vocabulary,
          attributes: ["title"],
          include: [
            {
              model: language,
              attributes: ["title", "code"],
            },
          ],
        },
      ],
    });

    // send all words in vocabulary
    return res.status(200).send(allWordsInVocab);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
