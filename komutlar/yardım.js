const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('> !eğlence = eğlence komutlarını gösterir\n> !yetkili = moderasyon komutlarını gösterir\n> !kullanıcı = kullanıcı komutlarını gösterir\n> !bot = botun ana komutlarını gösterir');
    }

exports.conf = {
    enabled: true,
    aliases: ['yardım'],
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'komutları gösterir',
    usage: 'yardım'
  };