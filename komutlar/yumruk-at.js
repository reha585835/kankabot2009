const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kafasınasık` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('yumruk atmak istediğin kişiyi etiketlemelisin').catch(console.error);
    message.channel.send(' https://tenor.com/view/milk-and-mocha-happy-punch-hit-gif-14041680 yumruk attın!!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yumruk-at'],
  permLevel: 0
};

exports.help = {
  name: 'yumruk-at',
  description: 'istediğiniz kişiye yumruk atar',
  usage: 'yumruk-at'
};