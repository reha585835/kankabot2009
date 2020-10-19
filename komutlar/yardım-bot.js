const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('> !davet = botu davet etmenizi sağlar\n> !şikayet = botla ilgili şikayetlerinizi iletmenizi sağlar\n> !öneri = botla ilgili öneri yapmanızı sağlar\n> !canlı-destek = canlı destek açarsınız ve yetkililer sizinle canlı ilgilenirler');
    }

exports.conf = {
    enabled: true,
    aliases: ['yardım-bot'],
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'bot',
    description: 'bot komutları gösterir',
    usage: 'bot'
  };