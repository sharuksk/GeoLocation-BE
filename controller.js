
const http = require("https");
const url = "mongodb+srv://sharukajmal2:SharukDB%40123@cluster0.cfzoga8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const axios = require("axios");
const qs = require("qs");
const mongoose = require ("mongoose");
const cors = require("cors");
const nodeBase64 = require("nodejs-base64-converter");
const VideoPath = require('./Model/videoPath');


exports.handlePostVideo = async (req, res) => {
    try {
      const VideoFile = new VideoPath({
        fileName: req.body.fileName,
        file64: req.body.file64
    });
    console.log(req.body.fileName);

    VideoFile.save().then(video => res.json({
      message: "Base64 Received",
    }));
    } catch (err) {
      res.json("error")
    }
  };
exports.handleGetVideo = async (req, res) => {
    try {
      //VideoPath.deleteOne({fileName: "WhatsApp Video 2024-04-04 at 9.58.42 AM"})
      VideoPath.findOne({}).sort({createdOn: 1}).then(file64 => res.json(file64.file64))

    } catch (err) {
      console.log(err)
    }
  };