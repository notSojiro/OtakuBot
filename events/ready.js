const chalk = require('chalk');
const Discord = require('discord.js');
const settings = require('../settings.json');
const client = new Discord.Client();
const fs = require('fs');
module.exports = client => {
    console.log(chalk.bgGreen.black(`OtakuGirl serve [${client.guilds.cache.size}] : Servers | [${client.users.cache.size}] : User | [${client.channels.cache.size}] : Channels`));
  let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    client.guilds.cache.forEach((guild) => {
      if (!blacklist[guild.ownerID]) {
        return;
      }else{
        if(blacklist[guild.ownerID].state === true) {
          message.guild.leave(guild.id)
        }
      }
    })
};