const axios = require('axios');

module.exports.config = {
  name: "gemini",
  version: "0.0.1",
  hasPermission: 0,
  credits: "ArYAN",
  usePrefix: false,
  description: "Gemini AI",
  commandCategory: "General",
  cooldowns: 2,
};

const API_SERVER_URL = 'https://xyz-gemini-pi.vercel.app/aryan/gemini';

module.exports.run = async ({ api, event, args }) => {
  try {
    const question = args.join(' ');

    if (!question) {
      return api.sendMessage("Please provide your question:", event.threadID);
    }

    const response = await axios.get(`${API_SERVER_URL}?prompt=${encodeURIComponent(question)}`);

    if (response.data.error) {
      return api.sendMessage(`Error: ${response.data.error}`, event.threadID);
    }

    const geminiAnswer = response.data.response;

    if (geminiAnswer) {
      api.sendMessage(`${geminiAnswer}`, event.threadID);
    } else {
      api.sendMessage("Something went wrong. Please try again.", event.threadID);
    }
  } catch (error) {
    console.error('Error fetching response from Gemini:', error.response ? error.response.data : error.message);
    api.sendMessage("Failed to get a response!", event.threadID);
  }
};
