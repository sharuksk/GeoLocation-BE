const {
    handleGetVideo,
    handlePostVideo,
  } = require("../controller");
  const router = require("express").Router();
  
  //VideoPath
  router.post("/getvideo", handleGetVideo);
  router.post("/postvideo", handlePostVideo);
  
  module.exports = router;
  