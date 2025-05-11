const fs = require("fs");
const axios = require("axios");

module.exports.config = {
  name: "npx",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ArYAN",
  description: "Sends a video from an API based on the received emoji.",
  commandCategory: "no prefix",
  usages: "[emoji]",
  cooldowns: 5,
};

const emojiList = [
  "😅", "💀", "🙂", "🌚", "🎀", "🫤", "❤️‍🩹", "😂", "📛", "❤️", 
  "☺️", "♊", "😏", "❤️‍🔥", "😺", "🙏", "👶", "😆", "📘", "🎥"
];

const emojiToVideoMap = {};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  const { threadID, messageID, body } = event;

  if (emojiToVideoMap.hasOwnProperty(body)) {
    const videoUrl = emojiToVideoMap[body];
    if (videoUrl) {
      try {
        const response = await axios.get(videoUrl, { responseType: 'stream' });
        if (response.status === 200) {
          const msg = {
            body: body,
            attachment: response.data
          };
          api.sendMessage(msg, threadID, messageID);
        } else {
          console.error("Error downloading video:", response.status);
          api.sendMessage("Could not send video at this time.", threadID, messageID);
        }
      } catch (error) {
        console.error("Error downloading or sending video:", error);
        api.sendMessage("Could not send video at this time.", threadID, messageID);
      }
    } else {
      api.sendMessage("No video URL associated with this emoji.", threadID, messageID);
    }
  }
};

module.exports.run = async function({ api, event, client, __GLOBAL }) {
  const { body, threadID, messageID } = event;

  if (emojiToVideoMap.hasOwnProperty(body)) {
    const videoUrl = emojiToVideoMap[body];
    if (videoUrl) {
      try {
        const response = await axios.get(videoUrl, { responseType: 'stream' });
        if (response.status === 200) {
          const msg = {
            body: body,
            attachment: response.data
          };
          api.sendMessage(msg, threadID, messageID);
        } else {
          console.error("Error downloading video:", response.status);
          api.sendMessage("Could not send video at this time.", threadID, messageID);
        }
      } catch (error) {
        console.error("Error downloading or sending video:", error);
        api.sendMessage("Could not send video at this time.", threadID, messageID);
      }
    } else {
      api.sendMessage("No video URL associated with this emoji.", threadID, messageID);
    }
  } else {
    api.sendMessage("Please send one of the following emojis to get a video: " + emojiList.join(", "), threadID, messageID);
  }
};

async function fetchVideoUrls() {
  try {
    const response = await axios.get("https://album-apis-xyz.vercel.app/aryan/crush");
    const videoUrls = response.data;

    if (Array.isArray(videoUrls)) {
      emojiList.forEach((emoji, index) => {
        if (videoUrls[index]) {
          emojiToVideoMap[emoji] = videoUrls[index];
        } else {
          console.warn(`No video URL found for emoji: ${emoji} at index ${index}`);
        }
      });
      console.log("Video URLs mapping:", emojiToVideoMap);
    } else {
      console.error("API response is not an array:", videoUrls);
    }

  } catch (error) {
    console.error("Error fetching video URLs:", error);
  }
}

fetchVideoUrls();
