const express = require("express");
const router = express.Router();
const spaetis = require("../sampleSpaetis.json");

const dotenv = require("dotenv");
dotenv.config();

router.get("/test", (req, res) => res.json({ msg: "api works" }));

/**
 * @name GET: /all/
 *
 * @description: Get all spaetis
 *
 */

router.get("/all", (req, res) => {
  res.json({ spaetis });
});

/**
 * @name GET: /all/
 *
 * @description: Get all spaetis
 * @param: <Number> id Users unique ID.
 *
 */

module.exports = router;
