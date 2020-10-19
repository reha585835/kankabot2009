const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('' + doMagicDiceVoodoo());

    function doMagicDiceVoodoo() {
        var rand = ['https://im.haberturk.com/2020/10/09/68102e47fb483be1d3337a1bee7696bc_640x640.jpg', 'https://im.haberturk.com/2020/10/09/053d53b311eb0aaaeeca20d7e865cf05_640x640.jpg', 'https://im.haberturk.com/2020/10/09/f3a7e5bcefa94bc7779d3134079bedf6_640x640.jpg', 'https://im.haberturk.com/2020/10/09/1e224c25995c429a07ea0d407da6bbe7_640x640.jpg', 'https://im.haberturk.com/2020/10/09/581c17fe91046bf35314e69f39ac9cc7_640x640.jpg', 'https://im.haberturk.com/2020/10/09/a288cd218aa4c2096d874bd4986e7ddb_640x640.jpg', 'https://im.haberturk.com/2020/10/09/cd1c5a64a275e80347924a89b7dcc109_640x640.jpg', 'https://im.haberturk.com/2020/10/09/fe4208539b5f773e69e9e47e6fb54c95_640x640.jpg', 'https://im.haberturk.com/2020/10/09/bf7ab91a69dafbb0d809d6aeafc55ea7_640x640.jpg'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['cuma-mesajı'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'cuma-mesajı',
  description: 'resimli cuma mesajı atar',
  usage: 'cuma-mesajı'
};