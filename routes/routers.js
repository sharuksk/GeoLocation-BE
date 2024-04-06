const {
    handleGetVideo,
    handlePostVideo,
    handleChartData,
  } = require("../controller");
  const router = require("express").Router();
  
  //VideoPath
  router.post("/getvideo", handleGetVideo);
  router.post("/postvideo", handlePostVideo);

  //Chart Data
  router.post("/chartdata", handleChartData);
  
  module.exports = router;
  