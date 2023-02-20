const express = require("express");
const takeController = require("../../controllers/takeController");
const apicache = require("apicache");

const router = express.Router();

const cache = apicache.middleware;

router.get("/", cache("2 minutes"), takeController.getAllTakes);

router.get("/:takeId", takeController.getOneTake);

router.post("/", takeController.createNewTake);

router.patch("/:takeId", takeController.updateOneTake);

router.delete("/:takeId", takeController.deleteOneTake);

module.exports = router;