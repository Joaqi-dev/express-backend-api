var express = require("express");
var router = express.Router();
const {v4: uuidv4} = require("uuid");


router.get("/", function(req, res, next){
    res.send(uuidv4());
});

module.exports = router;