const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('> !yaz = istediğiniz bir şeyi yazar\n> !!yapımcı = botun yapımcısını gösterir\n> !söz = özümlü söz söyler\n> !sunucu-resmi = sunucunun resmini atar \n> !saat = saati gösterir\n> !cuma-mesajı = cuma mesajı atar\n> !afk = afk olursunuz\n> !unafk = afkdan çıkarsınız\n> !ping = botun pingini gösterir\n> !sunucu-bilgi = sunucunun bilgilerini gösterir');
    }

exports.conf = {
    enabled: true,
    aliases: ['yardım-kullanıcı'],
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'kullanıcı',
    description: 'kullanıcı komutları gösterir',
    usage: 'kullanıcı'
  };