const express = require("express")
const dotenv = require("dotenv")
const router = express.Router()
const Shop = require('../models/shop')
dotenv.config()

/**
 * @name GET: /all/
 *
 * @description: Get all shops
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
 * @description: Get one shop
 * @param: <Number> ID.
 *
 */

router.get("/:id", getShop, (req, res) => {
  res.json(res.shop)
})

/**
 * @name POST: /
 *
 * @description: Create a shop
 * @body Shop model
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
 * @description: Updating a shop
 * @param: <Number> ID
 *
 */

router.patch("/:id", getShop, async (req, res) => {
  if(req.body.name != null) {
    res.shop.name = req.body.name
  }
  if(req.body.street != null) {
    res.shop.street = req.body.street
  }
  try {
    const updatedShop = await res.shop.save()
    res.json(updatedShop)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

/**
 * @name DELETE: /:id/
 *
 * @description: Deleting a shop
 * @param: <Number> ID
 *
 */

router.delete("/:id", getShop, async (req, res) => {
  try {
    await res.shop.remove()
    res.json({ message: 'Shop deleted'})
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

async function getShop(req, res, next) {
  let shop
  try {
    shop = await Shop.findById(req.params.id)
    if (shop === null) {
      return res.status(404).json({ message: 'Cannot find shop' })
    }
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }

  res.shop = shop
  next()
}

module.exports = router;
