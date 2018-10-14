const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var http = require('http');
const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
const yt = require('ytdl-core');
const dateFormat = require('dateformat');
let coins = require("./coin.json");

con = console.log,

bot.on("ready", function () {

  setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 37) + 1;
        switch (randomNumber) {
            case 1:
                bot.user.setGame("!commandes|Casipoulpe");
                break;
            case 2:
                bot.user.setGame("!commandes|Splatoon 2");
                break;
            case 3:
                bot.user.setGame("!commandes|Essayer d'apprendre à se servir des armes");
                break;
            case 4:
                bot.user.setGame("!commandes|Splatfest");
                break;
            case 5:
                bot.user.setGame("!commandes|Splatoon 2 it's great");
                break;
            case 6:
                bot.user.setGame("!commande|Splatoon 2 is better Splatoon 1");
                break;
            case 7:
                bot.user.setGame("!commandes|Le rouleau");
                break;
            case 8:
                bot.user.setGame("!commandes|Liquidateur");
                break;
            case 9:
                bot.user.setGame("!commandes|Splatted by the Octokling");
                break;
            case 10:
                bot.user.setGame("!commandes|I love Splatoon");
                break;
            case 11:
                bot.user.setGame("!commandes|Badigeonneur");
                break;
            case 12:
                bot.user.setGame("!commandes|Chic");
                break;
            case 13:
                bot.user.setGame("!commandes|Ayo it's here");
                break;
            case 14:
                bot.user.setGame("!commande|Oly it's not here °_°");
                break;
            case 15:
                bot.user.setGame("!commandes|Octo Canyon");
                break;
            case 16:
                bot.user.setGame("!commandes|Ink Cannon");
                break;
            case 17:
                bot.user.setGame("!commandes|Sardinium");
                break;
            case 18:
                bot.user.setGame("!commandes|Parchemin");
                break;
            case 19:
                bot.user.setGame("!commandes|Inkling");
                break;
            case 20:
                bot.user.setGame("!commandes|DJ Octave");
                break;
            case 21:
                bot.user.setGame("!commandes|The winner is Number 4");
                break;
            case 22:
                bot.user.setGame("!commandes|Splatoon it's stupid or illuminati ?");
                break;
            case 23:
                bot.user.setGame("!commandes|!questionnaire");
                break;
          case 24:
                bot.user.setGame("!commandes|why the inklings is not fly?");
                break;
          case 25:
                bot.user.setGame("!commandes|Splatension");
                break;
          case 26:
                bot.user.setGame("!commandes|Splatoon so good");
                break;
          case 27:
                bot.user.setGame("!commandes|Match Macking !");
                break;
          case 28:
                bot.user.setGame("!commandes|J'aime les squid . WOOOOOOOOMYYYYYYYYYYY");
                break;
          case 29:
                bot.user.setGame("!commandes|Octo Expansion !");
                break;
          case 30:
                bot.user.setGame("!commandes|Number 9 ?");
                break;
          case 31:
                bot.user.setGame("!commandes|Evilsquid or Octoboy ?");
                break;
          case 32:
                bot.user.setGame("!commandes|N-zap 83 , 85 or 89 ?");
                break;
          case 33:
                bot.user.setGame("!commandes");
                break;
          case 34:
                bot.user.setGame("!commandes|Nothing");
                break;
          case 35:
                bot.user.setGame("!commandes|I'm great in English");
                break;
          case 36:
                var Guilds = bot.guilds.size
                bot.user.setGame("!commandes|"+ Guilds +" Serveurs!");
                break;
	  case 37:
                var Guilds = bot.guilds.size
                bot.user.setGame("!commandes|WebSite ?");
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
        let rndNumber = Math.floor(Math.random() * 36) + 1;
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
    }, 9999999);*/
 bot.user.setUsername("Nintentoont™")

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


bot.on('message', message => {
    if (message.content === `${message.mentions.bot}`) {
message.channel.sendMessage("Oui , que voulez vous ?")
  }
});


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
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Un kick à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur kicker :", `${kUser} Son id est : ${kUser.id}`)
    .addField("Par :", `<@${message.author.id}> Son id est :  ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("à", message.createdAt)
    .addField("La raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "woomycation");
    if(!kickChannel) return message.channel.send("Je n'ai trouvé pas le chat 'woomycation'");

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
	
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Un ban à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur banni :", `${bUser} Son id est : ${bUser.id}`)
    .addField("Par :", `<@${message.author.id}> Son id est : ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("à", message.createdAt)
    .addField("La raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "woomycation");
    if(!incidentchannel) return message.channel.send("Je n'ai trouvé pas le chat 'woomycation'");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
}})
bot.on('message', message => {
  if(message.content === prefix + "serveur") {
try{
    var embed = new Discord.RichEmbed()
    .setTitle("Information du Serveur")
    .addField("Nom", message.guild.name)
    .addField("Créé le :", message.guild.createdAt)
    .addField("Tu as rejoin le : ", message.member.joinedAt)
    .addField("utilisateur sur serveur : ", message.guild.memberCount)
    .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
  }catch(err){
    message.channel.sendMessage("Une erreur c'est produite , veuilliez réessayer")
  }
  }
})




  


bot.on('message', message => {
  if(message.content === prefix + "commandes") {
    

    var embed = new Discord.RichEmbed()
    .setTitle("Vous avez demander de l'aide !")
    .addField("commandes :", "Voici toutes les commandes que vous pouvez faire :")
    .addField("!serveur", "Faite cette commande dans les serveur pour que vous voyez les Information du ce serveur")
    .addField("!chat", "Cette commande sert à parler avec d'autre gens de d'autre serveur !")
    .addField("!contact", "Vous disirez parler à quelqu'un ? alors faite !contact @utilisateur -Votre message (n'oublier pas le - avant le message !) ")
   .addField("!kick", "Vous devez avoir un rôle administrateur pour bannir la personne . La commande à faire est !ban @user raison")
   .addField("!ban", "Vous devez avoir un rôle administrateur pour expulser la personne . La commande à faire est !kick @user raison")
   .addField("!info", "Sert à voir vos informations concérnant votre compte .")
   .addField("!info @user", "Sert à voir les informations concérnant un compte de qeulqu'un .")
    .setFooter("D'autres commandes sera ajouté par la suite")
    .setColor("0x0000FF")
    message.author.send(embed)
    message.reply("Je vous envoie les commandes ")
 
  }
})

let coinsAmt = Math.floor(Math.random() * 1) + 1;
let baseAmt = Math.floor(Math.random() * 1) + 1;
console.log(`${coinAmt} ; ${baseAmt}`)
if (coinsAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinsAmt


  };
  fs.writeFile("./coins.json", JSON.stringify(coins),(err) => {
if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setcolor("#0000FF")
  .addField("Pièce", `:moneybag:Vous avez : ${coinsAmt} pièces d'ajoutées:moneybag:`);
message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
bot.login(process.env.TOKEN)
