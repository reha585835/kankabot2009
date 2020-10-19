const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField(`Üye Durumları`, `:green_circle: **${message.guild.members.filter(o => o.presence.status === 'online').size}**\n:orange_circle: **${message.guild.members.filter(i => i.presence.status === 'idle').size}**\n**:red_circle: ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}**\n:black_circle: **${message.guild.members.filter(off => off.presence.status === 'offline').size}** `, true)
    .setColor('RANDOM')
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucu-bilgi'
};
