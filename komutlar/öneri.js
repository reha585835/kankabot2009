const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: !öneri <öneri>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('ÖNERİNİZ BİLDİRİLDİ!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Önerisi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Öneri", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('766554338227126284').send(embed2); 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['öneri'],
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Öneri de bulunursunuz..',
  usage: 'öneri <öneriniz>'
};