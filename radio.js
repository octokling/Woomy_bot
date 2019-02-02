const Command = require('./command')
const Discord = require('discord.js')
const bot = new Discord.Client()
exports.run = (message, args, prefix, bot, http) => {
  
 bot.on('message', message => {

    if (message.content.startsWith('!radio')) {
      
      if (!prefix) {
     
     let embed = new Discord.RichEmbed()
				.setDescription("Liste des Radio :")
				.setColor("#b92727")
        .addField("Vous devez choisir entre ses radio :", "FunRadio ; FranceBleu ; Mixx ; NRJ ; VirginRadio .")
				return message.channel.send({ embed });
			}
      
      let radio; // Variable vide
			else if (prefix.toLowerCase() == "FunRadio") {
				radio = "A-RAP-FM-WEB";
        
			} else if (prefix.toLowerCase() == "FranceBleu") {
				radio = "WineFarmAndTouristradio";
        
			} else if (prefix.toLowerCase() == "Mixx") {
				radio = "ELECTROPOP-MUSIC";
        
      }else if (prefix.toLowerCase() == "NRJ") {
        radio = "ELECTROPOP-MUSIC";
        
          } else if (prefix.toLowerCase() == "VirginRadio") {
				radio = "ELECTROPOP-MUSIC";
            
			} else {
        let embed = new Discord.RichEmbed()
				.setDescription("Liste des Radio :")
				.setColor("#b92727")
        .addField("Vous devez choisir entre ses radio :", "FunRadio ; FranceBleu ; Mixx ; NRJ ; VirginRadio .")
				return message.channel.send({ embed });
			}
       const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
      message.member.voiceChannel.join().then(connection => {
				require('http').get(radio, (res) => {
					connection.playStream(res);
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
				});
			}).catch(err => "**Erreur:** ```\n" + err + "```");
			}
}
