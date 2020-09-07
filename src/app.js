// https://discord.com/oauth2/authorize?client_id=752431608618942464&scope=bot&permissions=18496

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const pictures = 10;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if(msg.author.bot){
      return;
  }
  
  message = msg.content.toLowerCase();

  if (message.includes("honk") || message.includes("hyonk")) {
    msg.reply("HYONK");
  }

});

client.login(process.env.TOKEN);