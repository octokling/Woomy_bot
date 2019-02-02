const command = require('./command')
const Discord = require('discord.js')
const bot = new Discord.Client()
const config = bot.config = require('./config.json');
var http = require('http');
exports.run = (message, args, prefix, bot, length) => {
	bot.on('message', message =>{
	const command = message.content.split(" ")[0].substring(config.prefix.length);
  const suffix = message.content.substring(command.length + config.prefix.length + 1);
      let radio; // Variable vide
			if (suffix.toLowerCase() == "FunRadio") {
				radio = "http://streaming.radio.funradio.fr/fun-1-48-192";
        
			} else if (suffix.toLowerCase() == "FranceBleu") {
				radio = "http://chai5she.cdn.dvmr.fr/fblarochelle-midfi.mp3";
        
			} else if (suffix.toLowerCase() == "Mixx") {
				radio = "http://broadcast.infomaniak.net/mixxfmfr-192.mp3";
        
      }else if (suffix.toLowerCase() == "NRJ") {
        radio = "http://streaming.radio.funradio.fr/fun-1-48-192";
        
          } else if (suffix.toLowerCase() == "VirginRadio") {
				radio = "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3";
		  
		  } else if (suffix.toLowerCase() == "VinciAutoroute") {
				radio = "http://str0.creacast.com/radio_vinci_autoroutes_8";
            
			} else {
        let embed = new Discord.RichEmbed()
				.setDescription("Liste des Radio :")
				.setColor("#b92727")
        .addField("Vous devez choisir entre ces radio :", "FunRadio ; FranceBleu ; Mixx ; NRJ ; VirginRadio .")
				return message.channel.send({ embed });
			}
       const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint');
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
}})
