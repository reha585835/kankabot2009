const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('> !takma-ad = istediğiniz kişinin takma adını değiştirir\n> !temizle = istediğiniz kadar mesaj siler\n> !oylama = oylama yapar\n> !ban = istediğiniz kişiyi banlar');
    }

exports.conf = {
    enabled: true,
    aliases: ['yardım-yetkili'],
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'yetkili',
    description: 'yetkili komutları gösterir',
    usage: 'yetkili'
  };