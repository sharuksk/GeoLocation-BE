
const http = require("https");
const axios = require("axios");
const qs = require("qs");
const cors = require("cors");
const nodeBase64 = require("nodejs-base64-converter");
const VideoPath = require('./Model/videoPath');
const LoadFile = require('./Model/loadFile');

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const url = "mongodb+srv://sharukajmal2:sharukdb@cluster0.cfzoga8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


exports.handlePostVideo = async (req, res) => {
    try {
      await LoadFile.deleteOne({});
      const VideoFile = new VideoPath({
        fileName: req.body.fileName,
        file64: req.body.file64,
        videoOrientation: req.body.videoOrientation
        });
        console.log(req.body.fileName);

        const fileToLoad = new LoadFile({
            fileName: req.body.fileName,
            file64: req.body.file64,
            videoOrientation: req.body.videoOrientation
        });

        fileToLoad.save();
        VideoFile.save().then(video => res.json({
          message: "Base64 Received",
        }));
    } catch (err) {
      res.json("error")
    }
  };
exports.handleGetVideo = async (req, res) => {

    //Mongo Client version
    // try{
    //   const client = await MongoClient.connect(url);
    //   const db = client.db("GeoLocation");
    //   await db.collection("loadfiles").findOne().then(file64 => res.json(file64))
    // }
    // catch{
    //     res.json("Video Not found")
    // }
      //VideoPath.deleteOne({fileName: "WhatsApp Video 2024-04-04 at 9.58.42 AM"})
      try{
        LoadFile.findOne({}).then(file64 => res.json(file64))
      }
      catch{
        console.log("Video is not available")
      }
      
  };

  
exports.handleStream = async (req, res) => {
  try {
    //VideoPath.deleteOne({fileName: "WhatsApp Video 2024-04-04 at 9.58.42 AM"})
    VideoPath.findOne({}).sort({createdOn: 1}).then(file64 => res.json(file64.file64))

  } catch (err) {
    console.log(err)
  }
};
exports.handleChartData = async (req, res) => {
  try {
    //VideoPath.deleteOne({fileName: "WhatsApp Video 2024-04-04 at 9.58.42 AM"})
    VideoPath.find()
      .then(data => {
        res.json(data)
      })

  } catch (err) {
    console.log(err)
  }
};

