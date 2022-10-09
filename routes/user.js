const router = require("express").Router();

router.get('/userTest', (req, res) => {
    res.send("User create successfull");
});

router.post('/userPost', (req, res) => {
    const userName= req.body.userName;

    console.log(userName);
})

module.exports = router