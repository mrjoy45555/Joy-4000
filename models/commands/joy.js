const fs = require("fs");
module.exports.config = {
  name: "joy",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "JOY", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😒")==0 || event.body.indexOf("💋")==0 || event.body.indexOf("😎")==0 || event.body.indexOf("🥵")==0) {
    var msg = {
        body: "Joy Ahmed",
        attachment: fs.createReadStream(__dirname + `/JOY/JOY404.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
