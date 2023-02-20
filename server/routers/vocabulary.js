const { Router } = require("express");

const Vocabulary = require("../models/").vocabulary;
const Language = require("../models/").language;
const Category = require("../models/").category;
const Word = require("../models/").word;

const authMiddleware = require("../auth/middleware");

const router = new Router();

// Get all Vocabularies
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    // user making request
    const userId = parseInt(req.user.dataValues.id);

    // find all vocabularies
    const allVocabularies = await Vocabulary.findAll({
      where: { userId: userId },
      include: [
        {
          model: Language,
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
    const vocabById = await Vocabulary.findByPk(vocabularyId, {
      where: { userId: userId },
    });

    // check if user has the vocabulary
    if (!vocabById) {
      return res.status(404).send({ message: "Not found" });
    }

    // find all words in vocabulary
    const allWordsInVocab = await Word.findAll({
      where: { vocabularyId: vocabularyId },
      include: [
        {
          model: Category,
          attributes: ["title"],
        },
        {
          model: Vocabulary,
          attributes: ["title"],
          include: [
            {
              model: Language,
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

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    // user making request
    const userId = parseInt(req.user.dataValues.id);

    // title and language of vocabulary sent by user
    const { title, language } = req.body;

    //check for parameters provided
    if (!title || !language) {
      return res.status(400).send("Missing parameters");
    }

    //find all vocabularies of the user
    const allVocabularies = await Vocabulary.findAll({
      where: { userId: userId },
    });

    //find vocabulary with the same name sent by user
    const vocabularyExists = allVocabularies.find(
      (v) => v.title.toLowerCase() === title.toLowerCase
    );

    //check the if name of vocabulary sent by user exists
    if (vocabularyExists) {
      return res.status(400).send("Vocabulary exists");
    }

    //find the language in the database
    const languageExists = await Language.findOne({
      where: { title: language },
    });

    //check if langiage exists
    if (!languageExists) {
      return res.status(400).send("Language not found");
    } else {
      //create vocabulary
      const vocabularyAdded = await Vocabulary.create({
        title,
        userId,
        languageId: languageExists.id,
      });
      // send the vocabulary created
      return res.status(200).send(vocabularyAdded);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
