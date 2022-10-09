const router = require("express").Router();

router.get("userTest", (req, res) => {
    res.send("User create successfull");
})

module.exports = router