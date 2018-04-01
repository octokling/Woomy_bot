const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
require("opusscript");
search = require('youtube-search');

con = console.log,

bot.on("ready", function () {
  bot.user.setGame(`ne pas avoir l'angine de PS liquidateur de kids|!commande`) 
var commande = [`ne pas avoir l'angine de PS liquidateur de kids|!commande`,`Woooooomy|!commande`,`Splatoon sur wii U`,`faire une encyclopédie splatoon|!commande`];

bot.user.setAvatar("./avata.jpg")
bot.user.setUsername("Splatbotoon™ :squid:")
.then(user => console.log(`j'ai choisis mon avatar`))
prefix = "!"





memberCount = client.users.size;
servercount = client.guilds.size;



    console.log("Je suis connecté");});

    bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur ' + member.displayName + '! Merci de respecter les regle ( si il en as)')
      }).catch(console.error)
    })
    
bot.on("guildCreate", guild  => {
    try {
   guild.channels.find("name", "woomycation").send(`Salut, merci de m'avoir invité sur le serv ${guild.name}, faites !commande pour avoir la liste de mes commandes !!`)
}catch(err) {
    guild.owner.send("Veuillez créer le salon `woomycation` !! Car une grande partie de mes fonctionalité sera désactivé et sans sa moi je suis liquider!!")
}
});

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

bot.on("message", message => {
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
if(!points[message.author.id]) points[message.author.id] = {expérience: 0, level: 0};
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



bot.on('message', message => {
   if (message.content.startsWith('!information')) {
     message.channel.send(` information de moi :je suis dans ${client.guilds.size} serveur ${message.guild.channels.size} et ${message.guild.members.size} `)
}
})


bot.on('message', message => {
   if (message.content.startsWith(`!jeux`)) {
  bot.user.setGame(`${message}|!commande`)
var commande = [`woomy , je vais de changer de jeux, patienter quelque minute ${message.author}`,`squidy, ok changement de jeux, patienter quelque minute ${message.author}`,`nyges, je vais changer de jeux, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
 .catch(console.error);
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 1`)) {

bot.user.setAvatar("./avatar.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith('!avatar')) {
    
    message.channel.send(`${message.author.avatarURL}`)

  }
});
bot.on("guildMemberAdd", async member => {
    try {
    let rol = member.guild.roles.find("name", "Les inkling")
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} est arivé(e):squid`)
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
bot.on(("guildMemberRemove"), (member)=> {
    try {
    member.guild.channels.find("name", 'woomycation').send(`:sob: "${member.user.tag}" est parti(e):sob:`);
        } catch(err) {
            member.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des personnes qui partent !!")
        }
        })
bot.on(("message"), async (msg)=>{
	 var msgAuthURL = msg.author.avatarURL;
    var msgAuthName = msg.author.username;
    var msgauthor = msg.author.id;
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
 if(command === "ping") {
        const m = await msg.channel.send("Ping?");
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        msg.delete();
        m.delete();
        }
  if(command === "say") {
	if(msg.author == config.creator) {
            const sayMessage = args.join(" ");
            msg.delete().catch(O_o=>{});
            msg.channel.send(sayMessage);
	} else {
	msg.channel.send("Tu n'est pas mon **Fondateur**")}
          }
    if(command === "kick") {
            if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour kick un utilisateur !");    
          let member = msg.mentions.members.first();
          if(!member)
            return msg.reply("Sois la mention est invalide, sois elle est inexistante.");
          if(!member.kickable) 
            return msg.reply("Tu ne peut pas kick cette personne, as-tu les permissions:grey_question:");
          let reason = args.slice(1).join(' ');
          if(!reason)
            return msg.reply("Maintenant la raison du ban et c'est fini ...");
          member.kick(reason)
            .catch(error => msg.reply(`Dsl ${msg.author} mais tu ne peut pas ban car: ${error}`));
            msg.channel.send(`${member.user} est kick, par ${msg.author.tag} car: ${reason}, sa lui servira de leçon`);
          msg.delete();
        }
   if(command === "ban") {
            if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour ban un utilisateur !");
            
          let member = msg.mentions.members.first();
          if(!member)
            return msg.reply("Sois la mention est invalide, sois elle est inexistante.");
          if(!member.bannable) 
            return msg.reply("Tu ne peut pas ban cette personne, as-tu les permissions:grey_question:");
      
          let reason = args.slice(1).join(' ');
          if(!reason)
            return msg.reply("Maintenant la raison du ban et c'est fini ...");
            await member.ban(reason)
                .catch(error => msg.reply(`Dsl ${msg.author} mais tu ne peut pas ban car: ${error}`));
                msg.channel.send(`${member.user} est banni, par ${msg.author.tag} car: ${reason},sa lui servira de leçon`);
          msg.delete();
        }
   if(command === "punir"){
            
            if(!msg.member.hasPermission("PS_liquideur_de_kids")) return msg.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
            
            let toMute = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
            if(!toMute) return msg.channel.send("Merci d'entrer un utilisateur !");
            let role = msg.guild.roles.find(r => r.name === "Punis");
                  if(!role){
                    role = await msg.guild.createRole({
                        name: "Punis",
                        color:"#73000",
                        permissions:[]
                      });
    msg.guild.channels.forEach(async (channel, id) => {
                      await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        CHANGE_NICKNAME: false,
                        CREATE_INSTANT_INVITE: false,
                        VIEW_CHANNEL: false,
                        SEND_TTS_MESSAGES: false
                        
                      });
                    });
     if(toMute.roles.has(role.id)) return msg.channel.send('Cet utilisateur est déjà punis !');
            
                await(toMute.addRole(role));
                msg.channel.send("Je l'ai punis !"), msg.delete();
                return;
              }           }
  
     if(command === "depunir") {
              if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
                
                let toMute = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
                if(!toMute) return msg.channel.send("Merci d'entrer un utilisateur !");
                let role = msg.guild.roles.find(r => r.name === "Punis");
                toMute.removeRole(role)
                msg.channel.send("Je l'ai dépunis !! fait attention a te ne pas refaire liquider!")

            }
        if(command === "purge") {
            if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour purger un channel !");
          const deleteCount = parseInt(args[0], 10);
          if(!deleteCount || deleteCount < 2 || deleteCount > 200)
            return msg.reply("Precise le nombre de msg à supprimer (2<200>2)");
          const fetched = await msg.channel.fetchMessages({count: deleteCount});
          const m = await msg.channel.send("Les messages sont suprimés");
          m.edit("Les messages sont suprimés");
          m.edit("Les messages sont suprimés");
          m.edit("Les messages sont suprimés");
          m.edit("Les messages sont suprimés");
          m.edit("Les messages sont suprimés");
          m.edit("Les messages sont suprimés");
          m.delete();
          msg.channel.bulkDelete(fetched)
            .catch(error => msg.reply(`Tu ne peut pas supprimer les msg car: ${error}`));
        }
  case "ping":
        if (msg.channel.type === "dm") return;
        break;
        case"ban":
        if (msg.channel.type === "dm") return;
        break;
        case "kick":
        if (msg.channel.type === "dm") return;
        break;
        case "purge":
        if (msg.channel.type === "dm") return;
        break;
     
     
     
bot.on('message', message => {
   if (message.content.startsWith('!amiibo')) {
    
    message.channel.sendImage(`/amiibo.jpg`)

  }
});


bot.on('message', message => {
   if (message.content.startsWith(`!avatar 2`)) {

bot.user.setAvatar("./avatar 1.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 3`)) {

bot.user.setAvatar("./avatar 2.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 4`)) {

bot.user.setAvatar("./avatar 3.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 5`)) {

bot.user.setAvatar("./avatar 4.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 6`)) {

bot.user.setAvatar("./avatar 5.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 7`)) {

bot.user.setAvatar("./avatar 6.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`!avatar 8`)) {

bot.user.setAvatar("./avatar 7.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})
bot.on('message', message => {
   if (message.content.startsWith(`!avatar 9`)) {

bot.user.setAvatar("./avatar 8.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content === "!avatar 10") {

bot.user.setAvatar("./avatar 9.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content === "!avatar 11") {

bot.user.setAvatar("./avatar 10.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content === "!avatar 12") {

bot.user.setAvatar("./avatar 11.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
if (message.content === "!avatar 13") {

bot.user.setAvatar("./avatar 12.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
if (message.content === "!avatar 14") {

bot.user.setAvatar("./avatar 13.png")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
if (message.content === "!avatar 15") {

bot.user.setAvatar("./avatar 14.png")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
if (message.content === "!avatar 16") {

bot.user.setAvatar("./avatar 15.png")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
if (message.content === "!avatar 17") {

bot.user.setAvatar("./avatar 16.png")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
if (message.content === "!avatar 18") {

bot.user.setAvatar("./avatar 17.jpg")
var commande = [`woomy, je vais de changer d'avatar, patienter quelque minute ${message.author}`,`squidy, changement d'avatar, patienter quelque minute ${message.author}`,`nyges, je vais changer d'avatar, patienter ${message.author}`];
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`bizzozeferrhdjjqeiijk`)) {

     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})


bot.on('message', message => {
if (message.content.startsWith(prefix + "commande")) 
var help_embed = new Discord.RichEmbed()
.setColor('#01FE7F')
.addField("Commande de Splatbotoon", "	-!level : votre niveaux (a découvrir) \n -!tonserveur : tu veut splatbotoont sur ton serveur alors fait vite cette commande\n -coucou @mention: pour dire un coucou a quelqu'un  \n yo @mention : idem  \n -salut @mention : idem \n -!ping : la commande la plus connu pour rien\n -!avatar 1 à 18 : pour changer l'avatar au bot\n -!jeux (votre phrase) : pour modifier le jeux tu bot")
.addField("Commande musique de Splatbotoont", "-!musique de 1 à 46: connecte toi sur le chat vocal ou il sera connecter et splatbotoont te chantera la musique choisis\n -!woomy : pareil que sur !musique sauf que c'est une musique débile \n -!voiceboy/voicegirl pour entendre toute les voix enrengistrer splatoon 1 bientôt de splatoon 2")
.setFooter("© Splatbotoont est tous droits réservés et Créé par Ps Liquidateur de Kids.")
message.channel.sendMessage(help_embed)

})

bot.on('message', message => {
   if (message.content.startsWith(`swignin `)) {
var commande = ["Ouai .","Après ?","Pfff, sa dévient ennuyant ton histiore.","Tu veut manger un morceaux ?","ET , je suis un bot pas un docteur !","Oh non , j'adore t'emmerdé , reste encore un peu :tired_face: !","Tagoule tu me soule !!!","A ton avis :thinking: , c'est moi ou c'est Evilsquid qui est le plus fort a splatoon 2 ?","Ba pour la penne je fait la guelle ","","","","","",""];
message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith(`gravegeezuegu rh jf`)) {
var commande = ["Ouai .","Après ?","Pfff, sa dévient ennuyant ton histiore.","Tu veut manger un morceaux ?","ET , je suis un bot pas un docteur !","Oh non , j'adore t'emmerdé , reste encore un peu :tired_face: !","Tagoule tu me soule !!!","A ton avis :thinking: , c'est moi ou c'est Evilsquid qui est le plus fort a splatoon 2 ?","Ba pour la penne je fait la guelle ","","","","","",""];
message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})




var mentions = ["<@357912301216595971>",
"<@342932332283559936>",
"<@343862895509110805>",
"<@350616975401287680>",
"<@122730307312025600>",
"<@138034502692765696>",
"<@208582900965310464>",
"<@349595754551181312>" ,
"<@319176598270115850>" ,
"<@319502067146424342>",
"<@324511259582136320>",
"<@357169409460011010>",
"<@370624289508163585>" ,
"<@301685061454135296>",
"<@296636852906098698>",
"<@337649899871010816>",
"<@320934385748803594>",
"<@362908381796761601>",
];


bot.on('message', message => {
    for(var i = 0; i < mentions.length; i++){
        if (message.content.startsWith(`coucou ${mentions[i]}`)) {
            message.channel.send(`Pssssst ${mentions[i]} , ${message.author} vous fait un coucou ^^`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentions.length; i++){
        if (message.content.startsWith(`salut ${mentions[i]}`)) {
            message.channel.send(`Pssssst ${mentions[i]} , ${message.author} vous dit salut ^^`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentions.length; i++){
        if (message.content.startsWith(`yo ${mentions[i]}`)) {
            message.channel.send(`Pssssst ${mentions[i]} , ${message.author} vous fait yooo ^^`)
        }
    }
})

var mentionsbot = [ ,"<@159985870458322944>",
"<@184405311681986560>",
"<@343852422663503882>",
"<@356053529783304192>",
"<@371276679710244864>",
];


bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`coucou ${mentionsbot[i]}`)) {
            message.channel.send(`Est ${message.author} ${mentionsbot[i]} est qu'un bot il pourra pas te répondre ^^`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`salut ${mentionsbot[i]}`)) {
            message.channel.send(`Est ${message.author} ${mentionsbot[i]} est qu'un bot il pourra pas te répondre ^^`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`yo ${mentionsbot[i]}`)) {
            message.channel.send(`Est ${message.author} ${mentionsbot[i]} est qu'un bot il pourra pas te répondre ^^`)
        }
    }
})

var mentionsplat = [ ,"<@356818100341047306>",
];
bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`coucou ${mentionsplat[i]}`)) {
            message.channel.send(`hey ${message.author} comment vas tu ?`)

      }
}
})

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`salut ${mentionsplat[i]}`)) {
            message.channel.send(`hey ${message.author} comment vas tu ?`)

        }
}
})

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`yo ${mentionsplat[i]}`)) {
            message.channel.send(`hey ${message.author} comment vas tu ?`)

    }
}
})

var mentionsdessins = [ ,"<@366476049648975873>",
];

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`coucou ${mentionsdessins[i]}`)) {
            message.channel.send(`Chuuut ${message.author} , ${mentionsdessins[i]} est en train de se concentré sur son dessins. Mais coucou quand même ${mentionsdessins[i]}`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`salut ${mentionsdessins[i]}`)) {
            message.channel.send(`Chuuut ${message.author} , ${mentionsdessins[i]} est en train de se concentré sur son dessins. Mais salut quand même ${mentionsdessins[i]}`)
        }
    }
})

bot.on('message', message => {
    for(var i = 0; i < mentionsbot.length; i++){
        if (message.content.startsWith(`yo ${mentionsdessins[i]}`)) {
            message.channel.send(`Chuuut ${message.author} , ${mentionsdessins[i]} est en train de se concentré sur son dessins. Mais salut quand même ${mentionsdessins[i]}`)
        }
    }
})

bot.on('message', message => {
   if (message.content.startsWith('!tonserveur')) {
     var commande = [`merci ${message.author} de vouloir de moi sur ton serveur https://discordapp.com/oauth2/authorize?client_id=356818100341047306&scope=bot&permissions=2146958591`,`merci beaucoup ${message.author} de me vouloir https://discordapp.com/oauth2/authorize?client_id=356818100341047306&scope=bot&permissions=2146958591`,`Serieux ${message.author} tu me veut ? alors je t'aime https://discordapp.com/oauth2/authorize?client_id=356818100341047306&scope=bot&permissions=2146958591`];
    message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}
})


bot.on("message", message => {

if (message.content === "test") {

var commande = ["Regarde, c'est du random","C'est magique t'as vu ?","Wouah","Merci becoup モ Splating","Sa faisait longtemps que je chercher cette commande"];

 message.channel.sendMessage(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}

})



bot.on("message", message => {

if (message.content === "!3dsthemes") {

message.channel.sendMessage(`Hey salut tout le monde donc voila juste pour dire qu'est-ce que vous en penser de la création de ${message.author} ?`)

message.channel.sendMessage(`voici la photo`)
message.channel.sendMessage("Bien sûr vous ne pouvez pas parler.Mais c'est normal parler avec des réaction")
message.channel.sendMessage('En tout cas merci ^_^')


}

})


client.on('ready', () => {
  // Get the channel via ID
  let channel = client.channels.get('378851818626613248');
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

bot.on("message", message => {

if (message.content === "!musique 8") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./musique 8.mp3')
    message.channel.sendMessage(`La musique 8 est lancée`)
})}})

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
