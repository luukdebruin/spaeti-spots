const express = require("express")
const router = express.Router()
const dotenv = require("dotenv")
const Shop = require('../models/shop')
dotenv.config()

/**
 * @name GET: /all/
 *
 * @description: Get all spaetis
 *
 */

router.get("/all", async (req, res) => {
  try {
    const shops = await Shop.find()
    res.json(shops)
  } catch (err) {
    res.status(500).json({ message: err.message})
  }
})

/**
 * @name GET: /:id/
 *
 * @description: Get one spaeti
 * @param: <Number> ID.
 *
 */

router.get("/:id", (req, res) => {
  res.json(req.params.id)
})

/**
 * @name POST: /
 *
 * @description: Create a spaeti
 *
 */

router.post("/", async (req, res) => {
  const shop = new Shop({
    name: req.body.name,
    street: req.body.street
  })

  try {
    const newShop = await shop.save()
    res.status(201).json(newShop)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
})

/**
 * @name PATCH: /:id/
 *
 * @description: Updating a spaeti
 * @param: <Number> ID
 *
 */

router.patch("/:id", (req, res) => {

})

/**
 * @name DELETE: /:id/
 *
 * @description: Deleting a speti
 * @param: <Number> ID
 *
 */

router.delete("/:id", (req, res) => {

})

module.exports = router;
