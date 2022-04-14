const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS"],
});

client.on("ready", () => {
  console.log(`bot is ready ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "hello") {
    
    msg.reply(`Hi <@${msg.author.id}>`);
  }
});
//event listner to welcome members
const welcomeChannel='964090441471508511';
client.on('guildMemberAdd',(member)=>{
    member.guild.channels.cache.get(welcomeChannel).send(`Welcome to the server <@${member.id}>`)
})

client.login(process.env.TOKEN);
