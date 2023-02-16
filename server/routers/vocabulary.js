const { Router } = require("express");

const { vocabulary, user } = require("../models");

const authMiddleware = require("../auth/middleware");

const router = new Router();

// Get All Vocabularies
router.get("/vocabularies", authMiddleware, async (req, res, next) => {
  try {
    // user making request
    const userId = parseInt(req.user.dataValues.id);

    // find all vocabularies
    const allVocabularies = await vocabulary.findAll({ where: userId });

    // vocabularies exist check
    if (!allVocabularies) {
      return res.status(404).send({ message: "Not found" });
    }

    // send all vocabularies
    return res.status(200).send(allVocabularies);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
