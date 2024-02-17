class TestController {

  async testData(req, res, next) {
    try {
      console.log("TestController testData");
      res.status(200).json({
        status: "success",
        data: "Test data "
      })
    }
    catch (e) {
      console.log("Test Data Error")
    }
  }

}

module.exports = new TestController();
