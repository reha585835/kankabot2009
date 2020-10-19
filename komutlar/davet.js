const Discord = require('discord.js')

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle(":envelope_with_arrow: botu sunucuna ekle")
    .setURL("https://discord.com/oauth2/authorize?client_id=753313962048880651&scope=bot&permissions=8")
    .setColor('RANDOM')
    message.channel.sendMessage(embed)
    }
exports.conf = {
    enabled: true,
    aliases: ['davet'],
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: 'davet',
    usage: 'davet'
  };