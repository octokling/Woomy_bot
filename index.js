const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var http = require('http');
const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
const yt = require('ytdl-core');
const config = require('./config.json')	
const ytdl = require('ytdl-core');
const dateFormat = require('dateformat');
const Google = require('./Linkgoogle.js')
const Jeux = require('./jeux.js')
const Youtube = require('./Linkyt.js')
const Wiki = require('./Linkwiki.js')
const github = require('./github.js')
const streamOptions = { seek: 0, volume: 1 };
var async = require("async");
var moment = require("moment");
var request = require('request');
const snekfetch = require("snekfetch");
const Canvas = require('canvas');
const antispam = require("discord-anti-spam");
var Admin = "490780128234831906"

con = console.log,

bot.on("ready", function () {

  setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 25) + 1;
        switch (randomNumber) {
            case 1:
                bot.user.setGame("!commandes|Mario + Lapin crétin kingdom battle !");
                break;
            case 2:
                bot.user.setGame("!commandes|Splatoon 2");
                break;
            case 3:
                bot.user.setGame("!commandes|Pikachu");
                break;
            case 4:
                bot.user.setGame("!commandes|Wii Sport");
                break;
            case 5:
                bot.user.setGame("!commandes|Wii sport resort !");
                break;
            case 6:
                bot.user.setGame("!commande|Nintendo");
                break;
            case 7:
                bot.user.setGame("!commandes|Place streetpass");
                break;
            case 8:
                bot.user.setGame("!commandes|Wii");
                break;
            case 9:
                bot.user.setGame("!commandes|Mario Kart");
                break;
            case 10:
                bot.user.setGame("!commandes|Super mario odyssey");
                break;
            case 11:
                bot.user.setGame("!commandes|Pokemon , attrapez les tous ...");
                break;
            case 12:
                bot.user.setGame("!commandes|Animal crossing");
                break;
            case 13:
                bot.user.setGame("!commandes|Tomodachi quest");
                break;
            case 14:
                bot.user.setGame("!commande|Miitopia");
                break;
            case 15:
                bot.user.setGame("!commandes|Kirby Squeak Squad");
                break;
            case 16:
                bot.user.setGame("!commandes|Arms !");
                break;
            case 17:
                bot.user.setGame("!commandes|Donkey Kong");
                break;
            case 18:
                bot.user.setGame("!commandes|Hyrule ou The legends of zelda ?");
                break;
            case 19:
                bot.user.setGame("!commandes|Nintendo switch");
                break;
            case 20:
                bot.user.setGame("!commandes|Wii u");
                break;
            case 21:
                bot.user.setGame("!commandes|Captaine toad !");
                break;
            case 22:
                bot.user.setGame("!commandes|Game cube");
                break;
            case 23:
                bot.user.setGame("!commandes|Nintendo 64");
                break;
          case 24:
                bot.user.setGame("!commandes|Game boy cameras °_°");
                break;
          case 25:
                bot.user.setGame("!commandes|Ink-news !");
                break;

        }

    }, 999999);

   setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 36) + 1;
        switch (rndNumber) {
            case 1:
                bot.user.setAvatar("./avatar 1.jpg");
                break;
            case 2:
                bot.user.setAvatar("./avatar 2.jpg");
                break;
            case 3:
                bot.user.setAvatar("./avatar 3.png");
                break;
            case 4:
                bot.user.setAvatar("./avatar 4.png");
                break;
            case 5:
                bot.user.setAvatar("./avatar 5.png");
                break;
            case 6:
                bot.user.setAvatar("./avatar 6.png");
                break;
            case 7:
                bot.user.setAvatar("./avatar 7.jpg");
                break;
            case 8:
                bot.user.setAvatar("./avatar 8.jpg");
                break;
            case 9:
                bot.user.setAvatar("./avatar 9.jpg");
                break;
            case 10:
                bot.user.setAvatar("./avatar 10.jpg");
                break;
            case 11:
                bot.user.setAvatar("./avatar 11.png");
                break;
            case 12:
                bot.user.setAvatar("./avatar 12.png");
                break;
            case 13:
                bot.user.setAvatar("./avatar 13.jpg");
                break;
            case 14:
                bot.user.setAvatar("./avatar 14.jpg");
                break;
            case 15:
                bot.user.setAvatar("./avatar 15.jpg");
                break;
            case 16:
                bot.user.setAvatar("./avatar 16.png");
                break;
            case 17:
                bot.user.setAvatar("./avatar 17.jpg");
                break;
            case 18:
                bot.user.setAvatar("./avatar 18.png");
                break;
            case 19:
                bot.user.setAvatar("./avatar 19.png");
                break;
            case 20:
                bot.user.setAvatar("./avatar 20.jpg");
                break;
            case 21:
                bot.user.setAvatar("./avatar 21.png");
                break;
            case 22:
                bot.user.setAvatar("./avatar 22.jpg");
                break;
            case 23:
                bot.user.setAvatar("./avatar 23.jpg");
                break;
            case 24:
                bot.user.setAvatar("./avatar 24.png");
                break;
            case 25:
                bot.user.setAvatar("./avatar 25.png");
                break;
            case 26:
                bot.user.setAvatar("./avatar 26.jpg");
                break;
            case 27:
                bot.user.setAvatar("./avatar 27.jpg");
                break;
            case 28:
                bot.user.setAvatar("./avatar 28.jpg");
                break;
            case 29:
                bot.user.setAvatar("./avatar 29.jpg");
                break;
            case 30:
                bot.user.setAvatar("./avatar 30.jpg");
                break;
            case 31:
                bot.user.setAvatar("./avatar.jpg");
                break;
        }
    }, 999999);

/*setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 4) + 1;
        switch (rndNumber) {
            case 1:
                bot.user.setAvatar("./halloween3.jpg");
                break;
            case 2:
                bot.user.setAvatar("./halloween2.jpg");
                break;
            case 3:
                bot.user.setAvatar("./halloween1.jpg");
                break;
            case 4:
                bot.user.setAvatar("./halloween.jpg");
                break;
        }
    }, 999999);
	setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 6) + 1;
        switch (rndNumber) {
            case 1:
                bot.user.setAvatar("./Noël.jpg");
                break;
            case 2:
                bot.user.setAvatar("./noël1.jpg");
                break;
            case 3:
                bot.user.setAvatar("./noël2.jpg");
                break;
            case 4:
                bot.user.setAvatar("./noël3.jpg");
                break;
	    case 5:
                bot.user.setAvatar("./noël4.png");
                break;
	    case 6:
                bot.user.setAvatar("./noël5.png");
                break;
        }
    }, 999999);
bot.user.setAvatar("./noël5.png");*/
bot.user.setUsername('Gametendo™').catch(console.error)
.then(user => console.log(`j'ai choisis mon avatar`))

prefix = "!"


})
memberCount = client.users.size;
servercount = client.guilds.size;
	
    console.log("Je suis connecté");

    bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur ' + member.displayName + '! Merci de respecter les regles choisis par le(s) fondateur \n\n Welcome on the serveur. ' + member.displayName + '! Thank of respect the rules choose by founder(s) . ')
      }).catch(console.error)
    })

bot.on("message", message =>{

  if (message.content.startsWith(`!contact`)) {
 try{
  message.delete()
 const User = message.mentions.members.first()
if(!User) return message.channel.send("Impossible de trouver l'utilisateur !");
var sd2 = message.content.split("-").slice(1)[0];
var emb = new Discord.RichEmbed()

.setFooter(`© The Octokling est tous droits réservés et Créé par The Octokling`, bot.user.avatarURL)

.setColor("730000")
.setTitle("Quelqu'un vous as envoyez un message !:")
.setDescription(`Message de ${message.author.tag} : ` + sd2 )
User.send(emb)
 }catch(err) {
            message.channel.send("Une erreur c'est produite lors de l'envoie du message ou l'utilisateur n'est pas dans le ce serveur, veuilliez en parlez à Liquideur de kids si le problème persiste. Merci")
        }
}
  })


bot.on('message', function(message) {
const args = message.content.split(" ").slice(1);
 
	if(message.content[0] === prefix){


		let splitMessage = message.content.split(" "); // split le message en deux [!pfc] & [contenu]
		if(splitMessage[0] === '!pfc') {
			if(splitMessage.length === 2) {
 Jeux.run(message, args, prefix, bot, splitMessage); 
			}}}
  Wiki.parse(message)
 
  Youtube.parse(message)
 
  Google.parse(message)
	 
  github.parse(message)
})
bot.on('message', function (msg) {
	if (msg.content.indexOf(config.prefix) === 0) {
      		const command = msg.content.split(" ")[0].substring(config.prefix.length); // Command
      		const music = msg.content.substring(command.length + config.prefix.length + 1); // Arguments
	}});
bot.on('message', message =>{
	
	if (message.content.startsWith(`!radio`)) {
		console.log(prefix.length)
const command = message.content.split(" ")[0].substring(prefix.length); // Command
      		const music = message.content.substring(command.length + prefix.length + 1); // Arguments
 if (!music) {
let embed = new Discord.RichEmbed()
				.setDescription("Liste des Radio :")
				.setColor("#b92727")
        .addField("Vous devez choisir entre ces radio :", "FunRadio ; FranceBleu ; Mixx ; NRJ ; VirginRadio .")
				return message.channel.send({ embed });
			}
      let radio; // Variable vide
			if (music == "FunRadio") {
				radio = "http://streaming.radio.funradio.fr/fun-1-48-192";
              const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
				})})};
			} else if (music == "FranceBleu") {
				radio = "http://chai5she.cdn.dvmr.fr/fblarochelle-midfi.mp3";
              const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
				})})};
			} else if (music == "Mixx") {
				radio = "http://broadcast.infomaniak.net/mixxfmfr-192.mp3";
              const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
				})})};
      }else if (music == "NRJ") {
        radio = "http://streaming.radio.funradio.fr/fun-1-48-192";
              const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
				})})};
          } else if (music == "VirginRadio") {
				radio = "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3";
              const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
				})})};
		  } else if (music == "VinciAutoroute") {
				radio = "http://str0.creacast.com/radio_vinci_autoroutes_8";
              const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
				})})};
			} else {
        let embed = new Discord.RichEmbed()
				.setDescription("Liste des Radio :")
				.setColor("#b92727")
        .addField("Vous devez choisir entre ces radio :", "FunRadio ; FranceBleu ; Mixx ; NRJ ; VirginRadio .")
				return message.channel.send({ embed });
			}
			
	}})
bot.on("message", message => {
 if (message.content.startsWith(`!testradio`)) {
	 let radio;
  radio = "http://streaming.radio.funradio.fr/fun-1-48-192";
	 const voiceChannel = message.member.voiceChannel;
   if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
	    require('http').get(`${radio}`, (res) => {
		    connection.playStream(res);
	    })
    })
           let embed = new Discord.RichEmbed()
					.setColor("#b92727")
					.setDescription("Radio activé")
					message.channel.send({ embed });
 }})
bot.on("message", message => {
 if (message.content.startsWith(`!chat`)) {
message.delete(message.author)
let xoargs = message.content.split(" ").slice(1);
let xo03 = xoargs.join(" ")
if(!message.guild.channels.find("name", "chatuni")) return message.reply("Le channel 'chatuni' est introuvable");
if(message.channel.name !== "chatuni") return message.reply("vous devez effectuer cette commande dans le tchat 'chatuni'");
  if(!xo03) return message.reply("Merci d'écrire un message pour que vos ami vois ce que vous avez écrit");

var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
let couleur = (replys[Math.floor(Math.random() * replys.length)])

var embed = new Discord.RichEmbed()
.setColor(couleur)
.setAuthor("The Octokling", bot.user.avatarURL)
.addField("Serveur", message.guild.name, true)
.addField("Utilisateur", message.author.tag, true)
.addField("Message", xo03)
.setFooter(`© The Octokling est tous droits réservés et Créé par The Octokling`, bot.user.avatarURL)
bot.channels.filter((c) => c.name === 'chatuni').map(channel => channel.send(embed))


}})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


	  if (message.content.startsWith(prefix + 'info')){
           let iUser = message.mentions.members.first();
     if (!message.mentions) return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
     if(iUser){
      const now = new Date();
dateFormat(now, 'shortDate');
    var embed = new Discord.RichEmbed()


    .setTitle("Information de "+ iUser.displayName +" sur le serveur " + message.guild.name)
   .setThumbnail(iUser.user.avatarURL) 
   .addField("Pseudo : ", iUser.displayName, true)
    .addField("Son id : ", iUser.id, true)
   .addField("Son statut : ", iUser.presence.status, true)
   .addField("Il joue à : ", `${iUser.user.presence.game ? `${iUser.user.presence.game.name}` : "Il ne joue pas."}`)
   .addField("Utilisateur créé le :", dateFormat(iUser.user.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(iUser.user.createdAt, 'H:MM'))
    .addField("As rejoin le serveur le : ", dateFormat(iUser.joinedAt, 'dd/mm/yyyy') + " à " + dateFormat(iUser.joinedAt, 'H:MM'))
    .addField("Le rôle le plus élevé qu'il as : ", iUser.highestRole.name, true)
    .setColor("0x0000FF")
    message.channel.send(embed)
  }else{
 let iUser = message.member
 const now = new Date();
 dateFormat(now, 'shortDate');

    var embed = new Discord.RichEmbed()

     .setTitle("Information de "+ iUser.displayName +" sur le serveur " + message.guild.name)
   .setThumbnail(iUser.user.avatarURL) 
   .addField("Pseudo : ", iUser.displayName, true)
    .addField("Son id : ", iUser.id, true)
   .addField("Son statut : ", iUser.presence.status, true)
   .addField("Il joue à : ", `${iUser.user.presence.game ? `${iUser.user.presence.game.name}` : "Il ne joue pas."}`)
   .addField("Utilisateur créé le :", dateFormat(iUser.user.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(iUser.user.createdAt, 'H:MM'))
    .addField("As rejoin le serveur le : ", dateFormat(iUser.joinedAt, 'dd/mm/yyyy') + " à " + dateFormat(iUser.joinedAt, 'H:MM'))
    .addField("Le rôle le plus élevé qu'il as : ", iUser.highestRole.name, true)
    .setColor("0x0000FF")
    message.channel.send(embed)}}
if(cmd === `${prefix}kick`){


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'est pas mon roi !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu est FOU ! Je refuse de kicker cette personne !");

	var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
	let couleur = (replys[Math.floor(Math.random() * replys.length)])
	dateFormat(now, 'shortDate');
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Un kick à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur kicker : ", `${kUser} Son id est : ${kUser.id}`)
    .addField("Par : ", `<@${message.author.id}> Son id est :  ${message.author.id}`)
    .addField("Dans : ", message.channel)
    .addField("Le : ", dateFormat(kUser.user.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(kUser.user.createdAt, 'H:MM'))
    .addField("La raison : ", kReason);

    let kickChannel = message.guild.channels.find(`name`, "nintenlogs");
    if(!kickChannel) return message.channel.send("Je n'ai trouvé pas le chat 'nintenlogs'");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu est pas mon roi !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu est FOU ! Je refuse de bannir cette personne !");

	var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
	let couleur = (replys[Math.floor(Math.random() * replys.length)])
	dateFormat(now, 'shortDate');
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Un ban à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur banni :", `${bUser} Son id est : ${bUser.id}`)
    .addField("Par : ", `<@${message.author.id}> Son id est : ${message.author.id}`)
    .addField("Dans : ", message.channel)
    .addField("Le : ", dateFormat(bUser.user.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(bUser.user.createdAt, 'H:MM'))
    .addField("La raison : ", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "nintenlogs");
    if(!incidentchannel) return message.channel.send("Je n'ai trouvé pas le chat 'nintenlogs'");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
}})
var number_random = 0;

var party_launch = false;


bot.on('message', function(message){
    if(message.content.startsWith(prefix + "guess_start")){
        message.channel.sendMessage("Partie lancer par " + message.author + " !")
        party_launch = true;
        number_random = Math.floor(Math.random() * (500 - 0) + 0)
        console.log(number_random);
    }  
    if(party_launch && message.content !=null){
        if(Number.isInteger(parseInt(message.content))){
            if(message.content > number_random){
                message.reply("Le nombre est petit que le votre !")
            }
            else if(message.content < number_random){
                message.reply("Le nombre est plus grand que le votre !")
            }
            else{
                message.reply("tu as gagné la partie !")
                party_launch = false;
            }
        }
    }
    
})

bot.on('message', message => {
  if(message.content === prefix + "serveur") {
try{
	dateFormat(now, 'shortDate');
    var embed = new Discord.RichEmbed()
    .setTitle("Information du Serveur")
    .addField("Nom", message.guild.name)
    .addField("Créé le :", dateFormat(message.guild.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(message.guild.createdAt, 'H:MM'))
    .addField("Tu as rejoin le : ", dateFormat(message.member.joinedAt, 'dd/mm/yyyy') + " à " + dateFormat(message.member.joinedAt, 'H:MM'))
    .addField("utilisateur sur serveur : ", message.guild.memberCount)
    
    .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
  }catch(err){
    message.channel.sendMessage("Une erreur c'est produite , veuilliez réessayer \n"+ err )
  }
  }
})
bot.on("message", message => {
	if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
if (message.content.startsWith("!Info_bot")) {
	message.delete(5000)
	if (message.author.id !== `${Admin}`) {
      return message.channel.sendMessage("Tu n'est pas mon roi !")
    }
      const now = new Date();
dateFormat(now, 'shortDate');
    var embed = new Discord.RichEmbed()


    .setTitle("Mes information !")
   .setThumbnail(bot.user.avatarURL) 
    .addField("Mon id : ", bot.id, true)
   .addField("Je joue à : ", `${bot.user.presence.game ? `${bot.user.presence.game.name}` : "Il ne joue pas."}`)
   .addField("Je suis crée le :", dateFormat(bot.user.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(bot.user.createdAt, 'H:MM'))
    .addField("J'ai rejoint le serveur le : ", dateFormat(bot.joinedAt, 'dd/mm/yyyy') + " à " + dateFormat(bot.joinedAt, 'H:MM'))
    .addField("Mes serveur : ", (bot.guilds.map(r => r.name + ` | **${r.memberCount}** membre`)))
    .setColor("0x0000FF")

  message.author.send(embed)
    message.reply(", Je vous envoie mes information secrête !")
  }
}
)
bot.on("message", message => {
if (message.content.startsWith("!commandes")) {
    var embed = new Discord.RichEmbed()
    .setTitle("Vous avez demander de l'aide !")
    .addField("commandes :", "Voici toutes les commandes que vous pouvez faire :")
    .addField("!serveur", "Faite cette commande dans les serveur pour que vous voyez les Information du ce serveur")
    .addField("!chat", "Cette commande sert à parler avec d'autre gens de d'autre serveur !")
    .addField("!contact", "Vous disirez parler à quelqu'un ? alors faite !contact @utilisateur -Votre message (n'oublier pas le - avant le message !) ")
   .addField("!kick", "Vous devez avoir un rôle administrateur pour bannir la personne . La commande à faire est !ban @user raison")
   .addField("!ban", "Vous devez avoir un rôle administrateur pour expulser la personne . La commande à faire est !kick @user raison")
   .addField("!info", "Sert à voir vos informations concérnant votre compte .")
   .addField("!info @user", "Sert à voir les informations concérnant un compte de quelqu'un .")
    .addField("!google", "Vous voulez faire une recherche sur google ? alors faite !google (votre recherche)")
    .addField("!youtube", "!youtube (votre recherche)")
    .addField("!wiki", "!wiki (votre recherche)")
    .addField("!github", "!github (votre recherche)")
    .addField("!play (lien de la musique)", "Sert à écouter de la musique depuis youtube !")
    .addField("!pfc feuille/papier/ciseaux", "Jouer à pierre feuille ciseaux sur discord")
    .addField("!splatoon","S'avoir les commandes du jeu splatoon .")
    .addField("!triggered", "Votre profile en effet triggered")
    .addField("!guess_start", "Lance une partie de 'guess the number(devinez le nombre)'")
    .setDescription("Rejoingnez son serveur pour être informée des mises à jours et bien plus encore ! lien : https://discordapp.com/invite/sqWQkE8")
    .setFooter("© tout droit crée et fait par Octokling(1).js#7399")
    
    .setColor("0x0000FF")
    message.author.send(embed)
    message.reply("Je vous envoie les commandes ")
message.delete(5000)
 
  }
})
bot.on("message", message => {
if (message.content.startsWith("!splatoon")) {
    var embed = new Discord.RichEmbed()
    .setTitle("Vous avez demander de l'aide pour les commandes splatoon !")
    .addField(" ", "Voici toutes les commandes que vous pouvez faire :")
    .addField("!rotation" , "Voir les rotation splatoon 2 (Les modes et le maps sont en anglais)")
    .setDescription("Rejoingnez son serveur pour être informée des mises à jours et bien plus encore ! lien : https://discordapp.com/invite/sqWQkE8")
    .setFooter("© tout droit crée et fait par Octokling(1).js#7399")
    
    .setColor("0x0000FF")
    message.author.send(embed)
    message.reply("Je vous envoie les commandes ")
message.delete(5000)
 
  }
})

bot.on('message', message => {
	

	  if (message.content.startsWith('!play')) {
	  try{
	  let link = message.content.split("https://www.youtube.com/watch?v=").slice(1);
let link1 = link.join(" ")
if(!link1) return message.reply("Merci de bien mettre un lien youtube !");
    console.log('Vous avez une demander un musique! https://www.youtube.com/watch?v=' + link);
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
  voiceChannel.join().then(connection => { 
  	
var stream = connection.playStream(ytdl (`https://www.youtube.com/watch?v=${link}`, { audioonly : true}), {passes : 1});
            const dispatcher = connection.playStream(stream);
             dispatcher.on('end', () => voiceChannel.leave());
	    })
    
	  }catch(err){
	    message.reply(", je n'ais pas pue te mettre une musique !")
	    }
  }})



//match making splatoon
var splatoon = require('./splatoon.js');//la où ce trouve le match making
client.on('message', async message => {
	const args = message.content.split(" ").slice(1);
 if(message.content.toLowerCase().startsWith(prefix + 'rotation')){
      splatoon.run(message, args, prefix, client);//on execute la rotation dans le fichier splatoon.js
    }})
//triggered avatar
client.on("message", message => {
if (message.content.startsWith("!triggered")){
	let type = "triggered"; //Vous pouvez choisir le type d'image que vous souhaitez ici
        let url = message.author.avatarURL; //Vous pouvez choisir l'url de l'image que vous souhaitez ici
message.reply("Veuillez patientez quelque instant , le tant que je construis le " + type)
        snekfetch.get(`https://www.triggered-api.tk/api/v2/${type}?url=${url}`).set({ Authorization: `${process.env.tokentriggered}` })
        .then(res => {
        	message.reply("Voila , votre "+ type +" est prêt ^^")
        	message.channel.send({file:{attachment:res.body,name:"triggered.gif"}})
        }).catch(err => {
          if (err) console.log(`[Erreur] ${err}`);
        });
}})

//anti spam 
antispam(bot, {
    warnBuffer: 3, //Maximun de spam avant de le prévenir
    maxBuffer: 7, // Maximum de spam dans l'interval avant d'être banni
    interval: 10000, // Durée en ms, les utilisateurs peuvent envoyer un maximum de la variable maxBuffer avant d’être banni.
    warningMessage: "Arrête de spam sinon tu auras de grosse conséquance au bout de 4 fois encore", // Message d'avertissement envoyé à l'utilisateur pour lui indiquer qu'il va aller vite.
    banMessage: "Tant pis je t'avais prévenue .", // Message d'interdiction, toujours l'étiquette de l'utilisateur banni devant elle.
    maxDuplicatesWarning: 5,// quantité maximum de messages en double qu'un utilisateur peut envoyer en un laps de temps avant d'être averti
    maxDuplicatesBan: 10 // Nombre maximal de messages en double qu'un utilisateur peut envoyer en un laps de temps avant d'être banni
  });
bot.login(process.env.TOKEN)
