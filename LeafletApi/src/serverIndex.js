const { Router} = require("express")
const router = Router()
const bodyparser = require('body-parser');
const markers = require("./routes/markers")
const users = require("./routes/users")


router.use(bodyparser.json());
router.use("/markers", markers)
router.use("/user", users)  


module.exports = router;