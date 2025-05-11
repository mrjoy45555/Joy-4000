const fs = require("fs");
const axios = require("axios");
module.exports.config = {
  name: "npx",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "JOY", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "emoji send video",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
const rahad = await axios.get(`https://joy-video-api-94tm.onrender.com/random`);
const url = rahad.data.url,
const path = __dirname + `/cache/video${ex}`;
      fs.writeFileSync(path, Buffer.from((await axios.get(url, { responseType: "arraybuffer" })).data, "binary"));

  if (event.body.indexOf("😀")==0 || event.body.indexOf("😃")==0 || event.body.indexOf("😁")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😂")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("😊")==0 || event.body.indexOf("😇")==0 || event.body.indexOf("🥰")==0 || event.body.indexOf("😍")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("☺️")==0 || event.body.indexOf("😚")==0 || event.body.indexOf("😙")==0 || event.body.indexOf("🥲")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("😜")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("🫣")==0 || event.body.indexOf("🤔")==0 || event.body.indexOf("🫡")==0 || event.body.indexOf("🤐")==0 || event.body.indexOf("😐")==0 || event.body.indexOf("😑")==0 || event.body.indexOf("😶")==0 || event.body.indexOf("😏")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("😬")==0 || event.body.indexOf("🤧")==0 || event.body.indexOf("😴")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("😷")==0 || event.body.indexOf("🥴")==0 || event.body.indexOf("😵‍💫")==0 || event.body.indexOf("😎")==0 || event.body.indexOf("🧐")==0 || event.body.indexOf("😳")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("😰")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😱")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😫")==0 || event.body.indexOf("🥱")==0 || event.body.indexOf("😤")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("😽")==0 || event.body.indexOf("💋")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("🥀")==0 || event.body.indexOf("🌺")==0 ||  event.body.indexOf("🌹")==0) {
    var msg = {
        body: "🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑: 𝐉𝐎𝐘 𝐀𝐇𝐌𝐄𝐃",
        attachment: fs.createReadStream(path),
        }, event.threadID, () => fs.unlinkSync(path), event.messageID
      )
    }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
