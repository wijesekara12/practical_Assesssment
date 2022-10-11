const express = require("express");
const router = express.Router();
const { 
    addProd,
    getProd,
    getsingleProd,
    updateProd,
    removeProd
 } = require("../controllers/ProdController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getProd);

//@route POST api/ads
//@desc Add an ads
router.post("/", addProd);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateProd);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeProd);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleProd);

module.exports = router;
