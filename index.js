const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var http = require('http');
const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
const Play = require('./play.js');
const Youtube = require('./youtube');
const yt = require('ytdl-core');
con = console.log,

bot.on("ready", function () {
 
  setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 37) + 1;
        switch (randomNumber) {
            case 1:
                bot.user.setGame("Casipoulpe|!commande");
                break;
            case 2:
                bot.user.setGame("Splatoon 2|!commande");
                break;
            case 3:
                bot.user.setGame("Essayer d'apprendre le inkling|!commande");
                break;
            case 4:
                bot.user.setGame("Dire adieu à Splatoon 1|!commande");
                break;
            case 5:
                bot.user.setGame("Casser le jeux Splatoon 1|!commande");
                break;
            case 6:
                bot.user.setGame("Splatoon 2 is better Splatoon 1|!commande");
                break;
            case 7:
                bot.user.setGame("Source FilmMaker Splatoon|!commande");
                break;
            case 8:
                bot.user.setGame("Essayer de faire un un squid bag|!commande");
                break;
            case 9:
                bot.user.setGame("écouter du Sparta REMIX|!commande");
                break;
            case 10:
                bot.user.setGame("I love Splatoon|!commande");
                break;
            case 11:
                bot.user.setGame("Manger des Hambursalmon|!commande");
                break;
            case 12:
                bot.user.setGame("A faire des squid party|!commande");
                break;
            case 13:
                bot.user.setGame("Faire soit des octosaucice ou des salmonpané ?|!commande");
                break;
            case 14:
                bot.user.setGame("Ajouter des amis|!commande");
                break;
            case 15:
                bot.user.setGame("La mode cool au mode histoire|!commande");
                break;
            case 16:
                bot.user.setGame("Découvrir les secret de splatoon|!commande");
                break;
            case 17:
                bot.user.setGame("Essayer de liquider Oly|!commande");
                break;
            case 18:
                bot.user.setGame("Ne pas ce faire Splatted par -Ruby- ou ∞SK∆M|!commande");
                break;
            case 19:
                bot.user.setGame("Dominer le monde des Inkling|!commande");
                break;
            case 20:
                bot.user.setGame("Faire un prank à Octave|!commande");
                break;
            case 21:
                bot.user.setGame("The winner is splatbotoont|!commande");
                break;
            case 22:
                bot.user.setGame("Liquideur de kids est indétronable!|!commande");
                break;
            case 23:
                bot.user.setGame("Entraîner des gens|!commande");
                break;
          case 24:
                bot.user.setGame("Pourquoi les inkling ne volent pas ?|!commande");
                break;
          case 25:
                bot.user.setGame("Marcher sur les toyaux de l'entrainement|!commande");
                break;
          case 26:
                bot.user.setGame("Splatoon so good|!commande");
                break;
          case 27:
                bot.user.setGame("Délirer dans la musique 43|!commande");
                break;
          case 28:
                bot.user.setGame("J'aime les squid|!commande");
                break;
          case 29:
                bot.user.setGame("Je squide , tu squides , il squide , nous squidons , vous squidez , ils squident|!commande");
                break;
          case 30:
                bot.user.setGame("Je squidbage , tu squidbages , il squidbage , nous squidbagons , vous squidbagez , ils squidbagent|!commande");
                break;
          case 31:
                bot.user.setGame("Apprendre la technique d'Evil ou elle de Liquideur de kids|!commande");
                break;
          case 32:
                bot.user.setGame("m'Améliorer de plus en plus|!commande");
                break;
          case 33:
                bot.user.setGame("Faire !questionnaire|!commande");
                break;
          case 34:
                bot.user.setGame("être toujour en bêta|!commande");
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
                bot.user.setAvatar("./avatar 10.jpg");
                break;
            case 3:
                bot.user.setAvatar("./avatar 11.jpg");
                break;
            case 4:
                bot.user.setAvatar("./avatar 12.jpg");
                break;
            case 5:
                bot.user.setAvatar("./avatar 13.png");
                break;
            case 6:
                bot.user.setAvatar("./avatar 14.png");
                break;
            case 7:
                bot.user.setAvatar("./avatar 15.png");
                break;
            case 8:
                bot.user.setAvatar("./avatar 16.png");
                break;
            case 9:
                bot.user.setAvatar("./avatar 17.jpg");
                break;
            case 10:
                bot.user.setAvatar("./avatar 2.jpg");
                break;
            case 11:
                bot.user.setAvatar("./avatar 3.jpg");
                break;
            case 12:
                bot.user.setAvatar("./avatar 4.jpg");
                break;
            case 13:
                bot.user.setAvatar("./avatar 5.jpg");
                break;
            case 14:
                bot.user.setAvatar("./avatar 6.png");
                break;
            case 15:
                bot.user.setAvatar("./avatar 7.jpg");
                break;
            case 16:
                bot.user.setAvatar("./avatar 8.jpg");
                break;
            case 17:
                bot.user.setAvatar("./avatar 9.jpg");
                break;
            case 18:
                bot.user.setAvatar("./avatar 18.png");
                break;
            case 19:
                bot.user.setAvatar("./avatar 19.png");
                break;
            case 20:
                bot.user.setAvatar("./avatar 20.png");
                break;
            case 21:
                bot.user.setAvatar("./avatar 21.png");
                break;
            case 22:
                bot.user.setAvatar("./avatar 22.png");
                break;
            case 23:
                bot.user.setAvatar("./avatar 23.png");
                break;
            case 24:
                bot.user.setAvatar("./avatar 24.png");
                break;
            case 25:
                bot.user.setAvatar("./avatar 25.png");
                break;
            case 26:
                bot.user.setAvatar("./avatar 26.png");
                break;
            case 27:
                bot.user.setAvatar("./avatar 27.png");
                break;
            case 28:
                bot.user.setAvatar("./avatar 28.png");
                break;
            case 29:
                bot.user.setAvatar("./avatar 29.png");
                break;
            case 30:
                bot.user.setAvatar("./avatar 30.png");
                break;
             case 31:
                bot.user.setAvatar("./avatar 31.png");
                break;
             case 32:
                bot.user.setAvatar("./avatar 32.png");
                break;
             case 33:
                bot.user.setAvatar("./avatar 33.png");
                break;
            case 34:
                bot.user.setAvatar("./avatar 34.png");
                break;
          case 35:
                bot.user.setAvatar("./avatar 35.jpg");
                break;
          case 36:
                bot.user.setAvatar("./avatar 36.jpg");
                break;
                     
        }
    }, 999999);
bot.user.setUsername("Nintentoont™")

.then(user => console.log(`j'ai choisis mon avatar`))
prefix = "!"





memberCount = client.users.size;
servercount = client.guilds.size;



    console.log("Je suis connecté");});

    bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur ' + member.displayName + '! Merci de respecter les regle ')
      }).catch(console.error)
    })
    

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

bot.on("message", message => {
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
if(!points[message.author.id]) points[message.author.id] = {experience: 0, level: 0};
let userData = points[message.author.id];
userData.points++;
let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
if(curLevel > userData.level) {
// Level up!
userData.level = curLevel;
var commande = [`tient tien ${message.author} et passer niveaux**${curLevel}**!`,`${message.author} vient de passer niveaux **${curLevel}**!`,`BRAVO tu passe au niveau **${curLevel}**! et la tu doit être happy non ?`];

message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`);
}
if(message.content.startsWith(prefix + "level")) {
message.reply(`tu est actuellement niveau ${userData.level}, avec ${userData.points} d'expérience(s).`);
}
fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});





bot.on('message', function (message) {
    Play.parse(message);
    Youtube.parse(message);
});

bot.on("guildMemberAdd", async member => {
    try {
    let rol = member.guild.roles.find("name", "Les Inkling")
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} est arivé(e):squid:`)
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
    member.guild.channels.find("name", 'woomycation').send(emb);
    member.addRole(rol)
}catch(err) {
    member.guild.owner.send("Veuillez Créer le salon `woomycation` et le rôle `Les inkling` pour que tout le monde sache l'arrivée du nouveau woomy !!")
}
    });
 bot.on("roleCreate", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un rôle vien d'être créé sur ${role.guild.name}`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
        role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des roles créés !!")
        }
    });

 bot.on("roleDelete", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Le rôle ${role.name} viens d'être supprimé sur ${role.guild.name}`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomy`, comme ça tout le monde sera au courant des roles détruits !!")
        }
    })

bot.on("channelsDelete", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un nouveau channel vient d'être créer`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomy`, comme ça tout le monde sera au courant des roles détruits !!")
        }
    })

bot.on("channelsCreate", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un channel vient d'être supprimé`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomy`, comme ça tout le monde sera au courant des roles détruits !!")
        }
    })

 bot.on("emojiCreate", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'image ${emoji.name}.png viens d'être importé pour un émoji sur ${emoji.guild.name} , woomy qu'il est joli`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            emoji.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des emojis créés !!")
        }
    })
 bot.on("emojiDelete", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'emoji ${emoji.name} viens d'être supprimé sur ${emoji.guild.name} woomy je le trouver joli moi`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            emoji.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des emojis créés !!")
        }
    })
bot.on("message", message =>{
    if (message.content.startsWith(`!musiqueh`)) { 
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Titre des musiques")
            .setDescription(`voici toute les titre de musique splatoon 2:  \n\n !musique 1 : Deluge Dirge (Salmon Run) \n\n !musique 2 : Ever Further – Grizzco Industries (Salmon Run) \n\n !musique 3 : Tidal Rush (DJ Octavio feat. Callie vs Marie) \n\n !musique 4 : Jelfonzo’s Shop \n\n !musique 5 : Lobby \n\n !musique 6 : Acid Hues (Off the Hook) – Splatfest Battle Theme \n\n !musique 7 : Muck Warfare (Off The Hook) – Splatfest Battle Thème \n\n !musique 8 : Splatoon 2 Remix ► Inkoming (CG5's Trap / Future Bass Remix) (Hors Service) \n\n !musique 9 : Beat of Inkopolis Square (with SFX) \n\n !musique 10 : Octo Canyon – Turquoise October (Singleplayer) \n\n !musique 11 : Octo Eight-Step – Turquoise October (Singleplayer) \n\n !musique 12 : Undertow (Testfire Version) \n\n !musique 13 : Shooting Starfish - Turquoise October (Singleplayer) \n\n!musique 14 : Tutorial \n\n!musique 15 : News Broadcast (Off the Hook) \n\n!musique 16 :Match Introduction\n\n!musique 17 : Now or Never! (Testfire Version)\n\n!musique 18 : Remix splatoon 1\n\n!musique 19 : Online Lobby (Ika Jamaica 2)\n\n!musique 20 : Rip Entry (Testfire Version)\n\n!musique 21 : Rip Entry (Wet Floor)\n\n!musique 22 : Sheldon's Shop \n\n!musique 23 : Spicy Calamari Inkantation\n\n!musique 24 : Beat of Inkopolis Square (with SFX).La suite sur !musiqueh2`)
        message.channel.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuilliez en parlez à Liquideur de kids . Merci")
        }}
    })


bot.on(("guildMemberRemove"), (member)=> {
    try {
    member.guild.channels.find("name", 'woomycation').send(`:sob: "${member.user.tag}" est parti(e):sob:`);
        } catch(err) {
            member.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des personnes qui partent !!")
        }
        })

bot.on('message', message => {
   if (message.content.startsWith(`!jeu`)) {
  bot.user.setGame(`${message}|!commande`)
var commande = [`woomy , je vais de changer de jeux, patienter quelque minute ${message.author}`,`squidy, ok changement de jeux, patienter quelque minute ${message.author}`,`nyges, je vais changer de jeux, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
 .catch(console.error);
}
})


bot.on('message', message => {
   if (message.content.startsWith(`!nepasdéranger`)) {
 bot.user.setStatus('dnd')
var commande = [`woomy , je vais de changer de disponibilité , patienter quelque minute ${message.author}. la disponibilité sera ne pas déranger`,`squidy, ok changement de disponibilité, patienter quelque minute ${message.author}. La disponibilité sera ne pas déranger`,`nyges, je vais changer de disponibilité, patienter ${message.author}.La disponibilité sera ne pas déranger`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
    message.guild.channels.server("name", 'Woomywiich').find("name", 'woomycation').send("Je suis actuellement indisponible merci de ne pas m'utiliser merci")
 .catch(console.error);
}
})
bot.on('message', message => {
   if (message.content.startsWith(`!online`)) {
 bot.user.setStatus('Online')
var commande = [`woomy , je vais de changer de disponibilité , patienter quelque minute ${message.author}. la disponibilité sera en ligne`,`squidy, ok changement de disponibilité, patienter quelque minute ${message.author}. La disponibilité sera en ligne`,`nyges, je vais changer de disponibilité, patienter ${message.author}.La disponibilité sera en ligne`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
 .catch(console.error);
}
})

bot.on('message', message => {
   if (message.content.startsWith('!monavatar')) {
    
    message.channel.send(`${message.author.avatarURL}`)

  }
});

bot.on('message', message => {
   if (message.content.startsWith('!information')) {
    
    message.channel.send(`je suis dans ${bot.guilds.size} serveur`)

  }
});

bot.on('message', message => {
if (message.content.startsWith(prefix + "commande")) { 
var help_embed = new Discord.RichEmbed()
.setColor('#01FE7F')
.addField("Commande de Splatbotoon", "-!online/inactif/nepasdéranger: changer la disponibilité du bot \n -!jeu : modifier le jeux du bot\n -!level : votre niveaux (a découvrir) \n -!tonserveur : tu veut splatbotoont sur ton serveur alors fait vite cette commande\n-!ping : la commande la plus connu pour rien\n -!monavatar pour voir son avatar en plus gros\n-!questionnaire : remplir le questionnaire de splatbotoont")
.addField("Commande musique de Splatbotoont", "-!musique de 1 à 46: connecte toi sur le chat vocal ou il sera connecter et splatbotoont te chantera la musique choisis\n -!woomy : pareil que sur !musique sauf que c'est une musique débile \n -!voiceboy/voicegirl pour entendre toute les voix enrengistrer splatoon 1 bientôt de splatoon 2\n-!musiqueh affiche toute les titre de musique (seulement jusqu'a 25 en ce moment).")
.addField("Logs", "Avant de voir les logs disponible de splatbotoont : \n créez un serveur nommée 'woomycation' \n dans les role selectionner que splatbotoont et mettre au moin envoyer des message, créez une invitation (pour prochainement hors grosse mise à jour)et gerer les message. après c'est tout\n passon au logs\n-1er : Je vous signale si il y a quelqu'un qui arrive sur votre serveur.\n-2ème : je vous signale si quelqu'un part de votre serveur.\n-3ème : je vous signale si quelqu'un à créez un nouveau émote (émoji).\n-4ème : je vous signale si quelqu'un a effacer un émote\n-5ème : je vous signale si quelqu'un à créez un role.\n-6ème : je vous signale si quelqu'un à supprimer un role")
.setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids.`, bot.user.avatarURL)
message.channel.sendMessage(`${message.author.tag} je vous envoie mes commande`)
message.author.send(help_embed)

  
 }})
bot.on('message', message => {
   if (message.content.startsWith('!tonserveur')) {
     var commande = [`merci ${message.author} de vouloir de moi sur ton serveur https://discordapp.com/api/oauth2/authorize?client_id=395896767142690817&scope=bot&permissions=2146958591`,`merci beaucoup ${message.author} de me vouloir https://discordapp.com/api/oauth2/authorize?client_id=395896767142690817&scope=bot&permissions=2146958591`,`Serieux ${message.author} tu me veut ? alors je t'aime https://discordapp.com/api/oauth2/authorize?client_id=395896767142690817&scope=bot&permissions=2146958591`];
   message.author.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
     message.author.send(`Pour s'avoir les commande faite !commande`)
}
})
bot.on('message', message => {
   if (message.content.startsWith('!questionnaire')) {
   message.author.send(`Merci , par contre veuiller le remplir correctement https://goo.gl/forms/wh901u7Hnqzs6n603`)

}
})


bot.on("message", message => {

if (message.content === "test") {

var commande = ["Regarde, c'est du random","C'est magique t'as vu ?","Wouah","Sa faisait longtemps que je chercher cette commande"];

 message.channel.sendMessage(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}

})

bot.on("message", (message) => {

if (message.content === "!message") {
message.guilds.get('name', "Woomywiich").channels.get('name', "wommycation").send("bonjour c'est un test")
message.guilds.get('name', "Chromapolis / Octovalée").channels.get('name', "wommycation").send("bonjour c'est un test")
}})

client.on('ready', () => {
  // Get the channel via ID
  let channel = client.channels.get('373461178694762496');
  // Or via name (less persistent)
  channel = client.channels.find('musique splatoon', 'Music');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
});

bot.on("message", message => {

if (message.content === "!woomy") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {

  message.channel.sendMessage(`La musique woomy est lancée`)
  connection.playFile('./music.mp3');


})}})

bot.on("message", message => {

if (message.content === "!voiceboy") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./Splatoon-Inkling Boy SFX.mp3')
    message.channel.sendMessage(`La musique voice boy est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!voicegirl") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./Splatoon-Inkling Girl SFX.mp3')
    message.channel.sendMessage(`La musique voice girl est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 1") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 1.mp3')
    message.channel.sendMessage(`La musique 1 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 2") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 2.mp3')
    message.channel.sendMessage(`La musique 2 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 3") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 3.mp3')
    message.channel.sendMessage(`La musique 3 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 4") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 4.mp3')
    message.channel.sendMessage(`La musique 4 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 5") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 5.mp3')
   message.channel.sendMessage(`La musique 5 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 6") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 6.mp3')
  message.channel.sendMessage(`La musique 6 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 7") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 7.mp3')
    message.channel.sendMessage(`La musique 7 est lancée`)
})}})


bot.on('message', message => {
  if (message.content.startsWith('!musique 8')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
        const stream = yt('https://www.youtube.com/watch?v=Bxr7dUTgsUs', { filter: 'audioonly' });
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});

bot.on("message", message => {

if (message.content === "!musique 9") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 9.mp3')
    message.channel.sendMessage(`La musique 9 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 10") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 10.mp3')
   message.channel.sendMessage(`La musique 10 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 11") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 11.mp3')
    message.channel.sendMessage(`La musique 11 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 12") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 12.mp3')
    message.channel.sendMessage(`La musique 12 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 13") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 13.mp3')
    message.channel.sendMessage(`La musique 13 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 14") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 14.mp3')
    message.channel.sendMessage(`La musique 14 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 15") {




let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 15.mp3')
    message.channel.sendMessage(`La musique 15 est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 16") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 16.wav')
    message.channel.sendMessage(`La musique 16 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 17") {



let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 17.mp3')
    message.channel.sendMessage(`La musique 17 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 18") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 18.mp3')
    message.channel.sendMessage(`La musique 18 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 19") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 19.mp3')
    message.channel.sendMessage(`La musique 19 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 20") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 20.mp3')
    message.channel.sendMessage(`La musique 20 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 21") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 21.mp3')
    message.channel.sendMessage(`La musique 21 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 22") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 22.mp3')
    message.channel.sendMessage(`La musique 22 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 23") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 23.mp3')
    message.channel.sendMessage(`La musique 23 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 24") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 24.mp3')
    message.channel.sendMessage(`La musique 24 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 25") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 25.mp3')
    message.channel.sendMessage(`La musique 25 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 26") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 26.mp3')
    message.channel.sendMessage(`La musique 26 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 27") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 27.mp3')
    message.channel.sendMessage(`La musique 27 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 28") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 28.mp3')
    message.channel.sendMessage(`La musique 28 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 29") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join(378851818626613248)
.then(function (connection) {
  connection.playFile('./musique 29.mp3')
    message.channel.sendMessage(`La musique 29 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 30") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 30.mp3')
    message.channel.sendMessage(`La musique 30 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 31") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 31.mp3')
    message.channel.sendMessage(`La musique 31 est lancée`)
})}})
bot.on("message", message => {

if (message.content === "!musique 32") {



let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 32.mp3')
    message.channel.sendMessage(`La musique 32 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 33") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 33.mp3')
    message.channel.sendMessage(`La musique 33 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 34") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 34.mp3')
    message.channel.sendMessage(`La musique 34 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 35") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 35.mp3')
    message.channel.sendMessage(`La musique 35 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 36") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 36.mp3')
    message.channel.sendMessage(`La musique 36 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 37") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 37.mp3')
    message.channel.sendMessage(`La musique 37 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 38") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 38.mp3')
    message.channel.sendMessage(`La musique 38 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 39") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 39.mp3')
    message.channel.sendMessage(`La musique 39 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 40") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 40.mp3')
    message.channel.sendMessage(`La musique 40 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 41") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 41.mp3')
    message.channel.sendMessage(`La musique 41 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 42") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 42.mp3')
    message.channel.sendMessage(`La musique 42 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 43") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 43.mp3')
    message.channel.sendMessage(`La musique 43 est lancée`)
})}})

bot.on("message", message => {

if (message.content === "!musique 44") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 44.mp3')
    message.channel.sendMessage(`La musique 44 est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 45") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 45.mp3')
    message.channel.sendMessage(`La musique 45 est lancée`)
})}})


bot.on("message", message => {

if (message.content === "!musique 46") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 46.mp3')
    message.channel.sendMessage(`La musique 46 est lancée`)
})}})
bot.login(process.env.TOKEN)
