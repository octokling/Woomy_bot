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
          case 34:
                bot.user.setGame("M'Apprendre l'anglais|!commande");
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
 
    setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 5) + 1;
        switch (rndNumber) {
            case 1:
                bot.user.setUsername("Splatbotoont™")
                break;
            case 2:
                bot.user.setUsername("Nintentoont™")
                break;
            case 3:
                bot.user.setUsername("Nintentoont™ (bêta)")
                break;
            case 4:
                bot.user.setUsername("Nintentoont™ (fr)")
                break;
           case 5:
                bot.user.setUsername("Splatbotoont™ (fr)")
                break;
          case 5:
                bot.user.setUsername("Splatbotoont™ (bêta)")
                break;
          case 6:
                bot.user.setUsername("Splatbotoont™ (0.5.6.5)")
                break;
          case 5:
                bot.user.setUsername("Nintentoont™ (0.5.6.5)")
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
    


bot.on("guildMemberAdd", async member => {
    try {
    let rol = member.guild.roles.find("name", "Les Inkling")
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} est arivé(e):squid:`)
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
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
        .setDescription(`Un rôle viens d'être créé sur ${role.guild.name}`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
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
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des roles détruits !!")
        }
    })

bot.on("channelsDelete", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un nouveau channel vient d'être supprimer`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des roles détruits !!")
        }
    })

bot.on("channelsCreate", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un channel vient d'être supprimé`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des roles détruits !!")
        }
    })

 bot.on("emojiCreate", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
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
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'emoji ${emoji.name} viens d'être supprimé sur ${emoji.guild.name} woomy je le trouver joli moi`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            emoji.guild.owner.send("Veuillez créer le salon `woomycation`, comme ça tout le monde sera au courant des emojis créés !!")
        }
    })
bot.on("message", message =>{
   if (message.content.startsWith(`!sp2mh`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Titre des musiques")         
       .setDescription(`voici toute les titre de musique splatoon 2:  \n\n !sp2m1 : Inkoming! (Testfire Version) \n\n !sp2m2 :Color Pulse (Off the Hook)\n\n !sp2m3 : Ebb & Flow (Off the Hook)\n\n !sp2m4 : Fest Zest (Off the Hook) \n\n !sp2m5 : Endolphin Surge (Wet Floor)\n\n !sp2m6 : Don't Slip! (Wet Floor) – Splatfest Battle Theme \n\n !sp2m7 : Undertow (Wet Floor)\n\n !sp2m8 : Rip Entry (Wet Floor)\n\n !sp2m9 : Acid Hues (Off the Hook) - Splatfest Battle Theme \n\n !sp2m10 : Muck Warfare (Off the Hook) - Splatfest Battle Theme\n\n !!sp2m11 : Bomb Rush Blush (DJ Octavio. feat Callie)\n\n !sp2m12 : Tidal Rush (DJ Octavio feat. Callie vs Marie)\n\n !sp2m13 : Spicy Calamari Inkantation (Squid Sisters)\n\n !sp2m14 : Fresh Start (Squid Sisters) \n\n!sp2m15 : Low Tide (Singleplayer Introduction) \n\n!sp2m16 : Octo Eight-Step - Turquoise October (Singleplayer)\n\n !sp2m17 : The Girl from Inkopolis - Turquoise October (Singleplayer) \n\n `)
         message.author.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuilliez en parlez à Liquideur de kids . Merci")
        }}
    })
bot.on("message", message =>{
   if (message.content.startsWith(`!sp2mh`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Titre des musiques")
.setDescription(`!sp2m18 : Buoyant Boogie - Turquoise October (Singleplayer)\n\n !sp2m19 : Buoyant Boogie - Shooting Starfish - Turquoise October (Singleplayer)\n\n !sp2m20 : Octarmaments - Turquoise October (Singleplayer)n\n !sp2m21 : Octo Canyon - Turquoise October (Singleplayer) \n\n !sp2m22 : Happy Little Workers - Grizzco Industries (Salmon Run)\n\n !sp2m23 : Deluge Dirge (Salmon Run)\n\n !sp2m24 : Fishing Frenzy - ω-3 (Salmon Run)!sp2m25 : Ever Further - Grizzco Industries (Salmon Run) \n\n !sp2m26 : Now or Never! [Dernière minute]\n\n !sp2m27 : Now or Never! (Splatfest Version)\n\n !sp2m28 : Now or Never! (Testfire Version)\n\n !sp2m29 : Inkoming! (Wet Floor)\n\n !sp2m30 : Undertow (Testfire Version)\n\n !sp2m31 : Rip Entry (Testfire Version)\n\n !sp2m32 : Tutorial\n\n !sp2m33 : Tutorial (Testfire Version) \n\n !sp2m34 : News Broadcast (Off the Hook) \n\n !!sp2m35 : Match Introduction\n\n `)
         message.author.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuilliez en parlez à Liquideur de kids . Merci")
        }}
    })
bot.on("message", message =>{
   if (message.content.startsWith(`!sp2mh`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Titre des musiques")
        .setDescription(`!sp2m36 : Ink another day (Wet Floor) - [Match perdu]\n\n !sp2m37 : Turf Master (Wet Floor) - [Match gagner]\n\n !sp2m38 : Lobby \n\n !sp2m39 : Online Lobby (Ika Jamaica 2) \n\n !sp2m40 :Sheldon's Shop\n\n !sp2m41 : Flow's Shop\n\n !sp2m42 : Bisk's Shop\n\n !sp2m43 : Jelfonzo's Shop\n\n !sp2m44 : Beat of Inkopolis Square (with SFX)\n\n !sp2m45 : Seafom Shanty (Bottom Feeders) [Short Promo Ver.]  \n\n !sp2m46 : Shipwreckin' (Bottom Feeders) [Patch 2.0]\n\n !sp2m47 : Fins & Fiddles (Bottom Feeders) [Patch 2.0]\n\n !sp2m48 : Seafoam Shanty (Bottom Feeders) [Patch 2.0]\n\n!sp2m49 : Broken Coral (Ink Theory) [Patch 2.0] \n\n !sp2m50 :Riptide Rupture (Ink Theory) [Patch 2.0] \n\n !sp2m51 : Octo Expansion Trailer`)
         message.author.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuilliez en parlez à Liquideur de kids . Merci")
        }}
    })
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

 if(cmd == `!kick`){

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Impossible de trouver l'utilisateur !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour kick !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas kick cette utilisateur !");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Oh ! qulqu'un c'est fait kicker !")
    .setColor("#e56b00")
    .addField("La personne kicker", `${kUser} avec ID ${kUser.id}`)
    .addField("Kicker par", `<@${message.author.id}> avec ID ${message.author.id}`)
    .addField("La raison", kReason)
    .addField("A quel heure ?", message.createdAt);

    message.guild.member(kUser).sendMessage("Vous avez était kick du discord de ${server} ! Pour :", kReason);

    let logchannel = message.guild.channels.find(`name`, `Woomycation`);
    if(!logchannel) return message.guild.channel.send("Erreur, merci de contacter Liquideur de kids !");

    message.delete().catch(O_o=>{});

    message.guild.member(kUser).kick(kReason);
    logchannel.send(kickEmbed);


    return;

  }

if(cmd === `!ban`){
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Impossible de trouver l'utilisateur !");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour ban !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas ban cette utilisateur !");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Oh! quelqu'un c'est fait kicker banni")
    .setColor("#bc0000")
    .addField("La personne banni", `${bUser} pour ID ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}> pour ID ${message.author.id}`)
    .addField("La raison", bReason)
    .addField("A quel heure ?", message.createdAt);

    message.guild.member(bUser).send("Vous avez était ban d'un serveur discord nommée ${server} ! Pour :", bReason);

    let logchannel = message.guild.channels.find(`name`, `Woomycation`);
    if(!logchannel) return message.guild.channel.send("Erreur, merci de contacter Liquideur de kids !");

    message.delete().catch(O_o=>{});
    message.guild.member(bUser).sendMessage("Vous avez était kick du discord de ${servers} ! Pour :", bReason);
    message.guild.member(bUser).ban(bReason);
    logchannel.send(banEmbed);


    return;
  }

 if(cmd == `!clear`){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour supprimer les message !");
    if(!args[0]) return message.channel.send("Vous devez préciser combien de message je dois supprimer !");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Clear de ${args[0]} messages.`).then(msg => msg.delete(5000));
  })

  return;
  }
});
 
bot.on("message", message =>{
   if (message.content.startsWith(`!eshopmh`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Dates des musiques")         
       .setDescription(` !eshopm1 : Juin 2011 (3DS) \n\n !eshopm2 : Novembre 2012 \n\n !eshopm3 : Septembre 2013 \n\n !eshop4 : Decembre 2013 \n\n !eshopm5 : Janvier 2014 \n\n !eshopm6 : Avril 2014 \n\n !eshopm7 : Juillet 2014 \n\n !eshopm8 : Janvier 2015 \n\n !eshopm9 : Juin 2015 \n\n !eshom10 : Septembre 2015 \n\n !eshopm11 : Decembre 2015 \n\n !eshopm12 : Janvier 2016  \n\n !eshopm13 : Mai 2016`)
        message.author.send(emb)
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
.addField("Commande de Splatbotoon", "-!online/nepasdéranger: changer la disponibilité du bot \n -!jeu : modifier le jeux du bot\n -!level : votre niveaux (a découvrir) \n -!tonserveur : tu veut splatbotoont sur ton serveur alors fait vite cette commande\n-!ping : la commande la plus connu pour rien\n -!monavatar pour voir son avatar en plus gros\n-!questionnaire : remplir le questionnaire de splatbotoont")
.addField("Commande musique de Splatbotoont", "-!clear(nombre de message a supprimer) : Pour ceux qui ont les permission __GéRER LES MESSAGE__ peuvent supprimer les message\n\n -!ban @mention (La raison du ban) : pour ceux qui sont __MODéRATEUR__ peuvent bannir les personnes \n\n -!kick @mention (La raison du kick) : pour ceux qui sont __MODéRATEUR__ peuvent expluser les gens-!eshopmh : toutes les dates des musique Nintendo Eshop \n\n -!eshopm(nombre de 1 à 13) : connecte toi sur le chat vocal ou il sera connecter et splatbotoont te chantera la musique choisis\n\n-!sp2m(nombre de 1 à 51) : connecte toi sur le chat vocal ou il sera connecter et splatbotoont te chantera la musique choisis\n-!sp2mh affiche toute les titre de musique.")
.addField("Logs", "Avant de voir les logs disponible de splatbotoont : \n créez un serveur nommée 'woomycation' \n dans les role selectionner que splatbotoont et mettre au moin envoyer des message, créez une invitation (pour prochainement hors grosse mise à jour)et gerer les message. après c'est tout\n passon au logs\n-1er : Je vous signale si il y a quelqu'un qui arrive sur votre serveur.\n-2ème : je vous signale si quelqu'un part de votre serveur.\n-3ème : je vous signale si quelqu'un à créez un nouveau émote (émoji).\n-4ème : je vous signale si quelqu'un a effacer un émote\n-5ème : je vous signale si quelqu'un à créez un role.\n-6ème : je vous signale si quelqu'un à supprimer un role")
.setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids.`, bot.user.avatarURL)
message.channel.sendMessage(`${message.author.tag} je vous envoie mes commande`)
message.author.send(help_embed)

  
 }})
bot.on('message', message => {
   if (message.content.startsWith('!tonserveur')) {
     var commande = [`merci ${message.author} de vouloir de moi sur ton serveur https://discordapp.com/oauth2/authorize?client_id=417229018132119562&scope=bot&permissions=2146958591`,`merci beaucoup ${message.author} de me vouloir https://discordapp.com/oauth2/authorize?client_id=417229018132119562&scope=bot&permissions=2146958591`];
   message.author.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
     message.author.send(`Pour s'avoir les commande faite !commande`)
}
})
bot.on('message', message => {
   if (message.content.startsWith('!questionnaire')) {
   message.author.send(`Merci , par contre veuiller le remplir correctement https://goo.gl/forms/wh901u7Hnqzs6n603`)

}
})
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let sender = message.author;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

 
if(cmd === `!sondage`){
    let sondage = args.join(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission de faire des sondages !");
    let sondageEmbed = new Discord.MessageEmbed()
    .setDescription("**Sondage** \n\n🔷 " + sondage + " \n\n ***sondage fait le :*** " + message.createdAt)
    .setColor("#FFFFFF");

    message.delete().catch(O_o=>{});

    return message.channel.send(sondageEmbed).then(function (message) {
        message.react("👍")
        message.react("👎")
        }).catch(function() {
      });

  }
bot.on("message", message => {

if (message.content === "test") {

var commande = ["Regarde, c'est du random","C'est magique t'as vu ?","Wouah","Sa faisait longtemps que je chercher cette commande"];

 message.channel.sendMessage(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}

})
bot.on('message', message => {
  if (message.content.startsWith('!sp2m1')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 1.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m2')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 2.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m3')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 3.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m4')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 4.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m5')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 5.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
     })})}})
bot.on('message', message => {
  if (message.content.startsWith('!sp2m6')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 6.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
bot.on('message', message => {
  if (message.content.startsWith('!sp2m7')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 7.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
bot.on('message', message => {
  if (message.content.startsWith('!sp2m8')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 8.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
bot.on('message', message => {
  if (message.content.startsWith('!sp2m9')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 9.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m10')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 10.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m11')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 11.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m12')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 12.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m13')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 13.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m14')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 14.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m15')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 15.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m16')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 16.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m17')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 17.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m118')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 18.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m19')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 19.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m20')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 20.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m21')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 21.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m22')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 22.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m23')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 23.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m24')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 24.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m25')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 25.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m26')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 26.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m27')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 27.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m28')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 28.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m29')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 29.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m30')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 30.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m31')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 31.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m32')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 32.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m33')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 33.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m34')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 34.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m35')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 35.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m36')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 36.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m37')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 37.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
      })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m38')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 38.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m39')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 39.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m40')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 40.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m41')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 41.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
        })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m42')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 42.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
         })})}})
 
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m43')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 43.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
 })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m44')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 44.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m45')) {
    console.log('Got a song request!');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 45.mp3')
        dispatcher.on('end', () => {
         message.channel.sendMessage(`Fin de la musique, déconnection ...!`)
          voiceChannel.leave();
       })})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m46')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 46.mp3')
})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m47')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 47.mp3')
        })}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m48')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 48.mp3')
})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m49')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 49.mp3')
})}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m50')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 50.mp3')
        })}})
 bot.on('message', message => {
  if (message.content.startsWith('!sp2m51')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 51.mp3')
        })}})
 bot.on('message', message => {
  if (message.content.startsWith('!eshopm1')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 1.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm2')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 2.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm3')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 3.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm4')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 4.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm5')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 5.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm6')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 6.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm7')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 7.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm8')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 8.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm9')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 9.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm10')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 10.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm11')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 11.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm12')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 12.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!eshopm13')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./eshop 13.mp3')
        })}})
bot.login(process.env.TOKEN)
