var router = require("express").Router();

router.use("/user", require("./user"));
router.use("/ad", require("./ad"));
router.use("/upload", require("./upload"));
//router.use("/floor", require("./floor"));
//router.use("/booking", require("./booking"));

module.exports = router;
