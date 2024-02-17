const Router = require("express");
const router = new Router();
const testController = require("../controllers/testController");

router.use("/data", testController.testData);

module.exports = router;
