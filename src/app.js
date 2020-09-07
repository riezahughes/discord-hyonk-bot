// https://discord.com/oauth2/authorize?client_id=752431608618942464&scope=bot&permissions=18496

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const imgur = require('imgur-node');

const words = [
    ":swan: Honk Honk, Motherfucker.",
    ":swan: Honk!",
    ":swan: Honk Hyonk!",
    ":swan: *HYOOOONK!*",
    ":swan: HONK HONK! *HYONKKKK!*"
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

    if(msg.author.bot){
        return;
    }

    imgur.album.get(process.env.IMGUR_KEY, '9JJiJWe', (err, res) => {

        if (err) console.error(err);

        imageChoice = Math.floor(Math.random() * res.images.length)
        wordChoice = Math.floor(Math.random() * words.length)

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(words[wordChoice])
        .setImage(res.images[imageChoice].link)
        .setFooter('#PricklesIsShit', "https://discord.js.org");

        return msg.channel.send(`<@${msg.author.id}>`, {embed});
    });

//   numberChoice = Math.floor(Math.random() * pictures);

//   message = msg.content.toLowerCase();

//   if (message.includes("honk") || message.includes("hyonk")) {
//     msg.reply("HYONK");
//   }

});

client.login(process.env.TOKEN);