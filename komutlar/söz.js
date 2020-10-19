const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('' + doMagicDiceVoodoo());

    function doMagicDiceVoodoo() {
        var rand = ['https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa8c03c0e1a40809272', 'https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa8c03c0e1a4080927c', 'https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa8c03c0e1a4080927a', 'https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa8c03c0e1a40809280', 'https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa9c03c0e1a40809282', 'https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa8c03c0e1a4080925e', 'https://i4.hurimg.com/i/hurriyet/75/0x0/5ac21fa9c03c0e1a40809286',];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['söz'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'söz',
  description: 'özlü sözler bulunan fotoğraf gönderir',
  usage: 'söz'
};