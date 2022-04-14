const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`bot is ready ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "hello") {
    msg.reply("hi");
  }
});
client.login(process.env.TOKEN);
