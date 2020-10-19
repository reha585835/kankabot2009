const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send('> !kralol = kral olursunuz\n> !soygun-yap = soygun yaparsın\n> !stres-çarkı = stres çarkı çevirirsiniz\n> !sık = istediğiniz kişiye sıkarsınız\n> !tekerleme = tekerleme söyler\n> !tekme-at = istediğiniz kişiye tekme atarsınız\n> !winner = zafer fotoğrafı atar\n> !yazı-tura = yazı tura oynarsınız\n> !yumruk-at = istediğiniz kişiye yumruk atarsınız\n> !zar-at = zar atarsınız\n> cs-kasa-aç = csgo kasa açarsınız');
    }

exports.conf = {
    enabled: true,
    aliases: ['yardım-eğlence'],
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'eğlence',
    description: 'eğlence komutları gösterir',
    usage: 'eğlence'
  };