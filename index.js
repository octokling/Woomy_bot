const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var http = require('http');
const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
const yt = require('ytdl-core');
con = console.log,

bot.on("ready", function () {

  setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 37) + 1;
        switch (randomNumber) {
            case 1:
                bot.user.setGame("!commande|Casipoulpe");
                break;
            case 2:
                bot.user.setGame("!commande|Splatoon 2");
                break;
            case 3:
                bot.user.setGame("!commande|Essayer d'apprendre à se servir des armes");
                break;
            case 4:
                bot.user.setGame("!commande|Splatfest");
                break;
            case 5:
                bot.user.setGame("!commande|Splatoon 2 it's great");
                break;
            case 6:
                bot.user.setGame("!commande|Splatoon 2 is better Splatoon 1");
                break;
            case 7:
                bot.user.setGame("!commande|Le rouleau");
                break;
            case 8:
                bot.user.setGame("!commande|Liquidateur");
                break;
            case 9:
                bot.user.setGame("!commande|Splatted by the Octokling");
                break;
            case 10:
                bot.user.setGame("!commande|I love Splatoon");
                break;
            case 11:
                bot.user.setGame("!commande|Badigeonneur");
                break;
            case 12:
                bot.user.setGame("!commande|Chic");
                break;
            case 13:
                bot.user.setGame("!commande|Ayo it's here");
                break;
            case 14:
                bot.user.setGame("!commande|Oly it's not here °_°");
                break;
            case 15:
                bot.user.setGame("!commande|Octo Canyon");
                break;
            case 16:
                bot.user.setGame("!commande|Ink Cannon");
                break;
            case 17:
                bot.user.setGame("!commande|Sardinium");
                break;
            case 18:
                bot.user.setGame("!commande|Parchemin");
                break;
            case 19:
                bot.user.setGame("!commande|Inkling");
                break;
            case 20:
                bot.user.setGame("!commande|DJ Octave");
                break;
            case 21:
                bot.user.setGame("!commande|The winner is Number 4");
                break;
            case 22:
                bot.user.setGame("!commande|Splatoon it's stupid or illuminati ?");
                break;
            case 23:
                bot.user.setGame("!commande|!questionnaire");
                break;
          case 24:
                bot.user.setGame("!commande|why the inklings is not fly?");
                break;
          case 25:
                bot.user.setGame("!commande|Splatension");
                break;
          case 26:
                bot.user.setGame("!commande|Splatoon so good");
                break;
          case 27:
                bot.user.setGame("!commande|Match Macking !");
                break;
          case 28:
                bot.user.setGame("!commande|J'aime les squid . WOOOOOOOOMYYYYYYYYYYY");
                break;
          case 29:
                bot.user.setGame("!commande|Octo Expansion !");
                break;
          case 30:
                bot.user.setGame("!commande|Number 9 ?");
                break;
          case 31:
                bot.user.setGame("!commande|Evilsquid or Octoboy ?");
                break;
          case 32:
                bot.user.setGame("!commande|N-zap 83 , 85 or 89 ?");
                break;
          case 33:
                bot.user.setGame("!commande");
                break;
          case 34:
                bot.user.setGame("!commande|Nothing");
                break;
          case 35:
                bot.user.setGame("!commande|I'm great in English");
                break;
          case 36:
                var Guilds = bot.guilds.size
                bot.user.setGame("!commande|"+ Guilds +" Serveurs!");
                break;
	  case 37:
                var Guilds = bot.guilds.size
                bot.user.setGame("!commande|WebSite ?");
                break;
        }

    }, 9999999);

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
    }, 9999999);

    setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 8) + 1;
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
                bot.user.setUsername("Nintentoont™ (fr/en)")
                break;
          case 5:
                bot.user.setUsername("Splatbotoont™ (fr/en)")
                break;
          case 6:
                bot.user.setUsername("Splatbotoont™ (bêta)")
                break;
          case 7:
                bot.user.setUsername("Splatbotoont™ (0.6.8.4)")
                break;
          case 8:
                bot.user.setUsername("Nintentoont™ (0.6.8.4)")
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
        return channel.send('Bienvenue sur le serveur ' + member.displayName + '! Merci de respecter les regles choisis par le(s) fondateur \n\n Welcome on the serveur. ' + member.displayName + '! Thank of respect the rules choose by founder(s) . ')
      }).catch(console.error)
    })



const request = require('request')
exports.run = (client, message, params) => {
	// get turf war maps
	request('https://splatoon2.ink/data/schedules.json', function (error, response, body) {
		body = JSON.parse(body);
		//console.log(body);
		var nowTurfMap1 = body.regular[0].stage_a.name;
		var nowTurfMap2 = body.regular[0].stage_b.name;
		var nextTurfMap1 = body.regular[1].stage_a.name;
		var nextTurfMap2 = body.regular[1].stage_b.name;

		const embedTurf = new Discord.RichEmbed()
			.setTitle("Les Maps du Match Classique")
			.setColor("2EFE2E")
			.setThumbnail("https://github.com/KunoichiZ/off-the-hook-bot/blob/master/images/turf%20war.png?raw=true")
			.addField("Maps:", nowTurfMap1 + ", " + nowTurfMap2)
			.addField("Les maps prochaines:", nextTurfMap1 + ", " + nextTurfMap2)
			.setFooter("© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids, bot.user.avatarURL");
		message.channel.find("name", 'info-stage').send(embedTurf);

		bot.on('message', message => {
   if (message.content.startsWith('!info_classique')) {

    message.channel.send(embedTurf)

  }
});

	});


	// display time that the maps switch
	request('https://splatoon2.ink/data/schedules.json', function (error, response, body) {
		body = JSON.parse(body);

		var cet   = body.regular[0].end_time
           var ncet  = cet.toString()
               ,   ncet  = ncet+"000"
               ,   ncet  = Number(ncet)
               ,   nceti = new Date(ncet+000).toISOString();

		const embedTime = new Discord.RichEmbed()
			.setTitle("Les stage on changé:")
			.setColor(10197915)
			//.addField("Today @ " + nceti)
			.setTimestamp(nceti);
		message.channel.send(embedTime);
	});
};
bot.on("guildCreate", guild  => {
    try {
   guild.channels.find("name", "woomycation").send(`Salut, merci de m'avoir invité sur le serveur nommé ${guild.name}, faites !commande pour avoir la liste de mes commandes !! Et surtout Tu doit crée un salon __woomycation__ , sinon je bug et sa c'est vraiment embêtant pour l'instant`)
}catch(err) {
    guild.owner.send("Une erreur est survenue :(")
}
});
bot.on("guildMemberAdd", async member => {
try {
    let rol = member.guild.roles.find("name", "Membre")
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} est arivé(e):squid:`)
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    member.guild.channels.find("name", 'woomycation').send(emb);
    member.addRole(rol)
}catch(err){
	member.owner.send("une erreur es survenue lors de l'envoie de l'information. Verifier le chat textuelle est bien nommé : __woomycation__. Si le problème perciste , Veuillez en parler à The Octokling#1148")

}});
bot.on("guildMemberAdd", async member => {
try{
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} is arrived:squid:`)
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    member.guild.channels.find("name", 'woomycation-en').send(emb);
    member.addRole(rol)
}catch(err){

}
    });
 bot.on("roleCreate", role =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("FF0000")
        .setTitle("woomycation")
        .setDescription(`Un rôle viens d'être ,nommé : ${role.name}`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
        role.guild.channels.find("name", 'woomycation').send(emb)
	role.react(":thumbsdown:")
}catch(err){

}
    });
bot.on("roleCreate", role =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("FF0000")
        .setTitle("woomycation")
        .setDescription(`One role have just been create, nommed : ${role.name}`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
        role.guild.channels.find("name", 'woomycation-en').send(emb)
        }catch(err){

}
    });
 bot.on("roleDelete", role =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Le rôle ${role.name} viens d'être supprimé sur ${role.guild.name}. `)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        }catch(err){

}
    })
bot.on("roleDelete", role =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`the role : ${role.name} have just been remove on ${role.guild.name}.`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation-en').send(emb)
       }catch(err){

}
    })

bot.on("channelsDelete", channels=>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un nouveau channel vient d'être supprimer sur ${channels.guild.name}.`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    channels.guild.channels.find("name", 'woomycation').send(emb)
       }catch(err){

}
    })
bot.on("channelsDelete", channels =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`One channel have just been remove on ${channels.guild.name}.`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    channels.guild.channels.find("name", 'woomycation-en').send(emb)
        }catch(err){

}
    })
bot.on("channelsCreate", channels =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un channel vient d'être supprimé sur ${channels.guild.name}.`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    channels.guild.channels.find("name", 'woomycation').send(emb)
        }catch(err){

}
    })
bot.on("channelsCreate", channels =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`One channel have just been remove on ${channels.guild.name}.`)
        .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
    channels.guild.channels.find("name", 'woomycation-en').send(emb)
        }catch(err){

}
    })

 bot.on("emojiCreate", emoji =>{
try{
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'image ${emoji.name} :${emoji.name}: viens d'être importé pour un émoji sur ${emoji.guild.name}.`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
}catch(err){

}
    })
 bot.on("emojiCreate", emoji =>{
try{
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`The emoji ${emoji.name} :${emoji.name}: have just been import for an emoji on ${emoji.guild.name}.`)
        }catch(err){

}
    })
 bot.on("emojiDelete", emoji =>{
try{
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'emoji ${emoji.name} :${emoji.name}: viens d'être supprimé sur ${emoji.guild.name}.`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
        }catch(err){

}
    })
 bot.on("emojiDelete", emoji =>{
try{
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`The emoji ${emoji.name} :${emoji.name}: have just been remove on ${emoji.guild.name}.`)
       emoji.guild.channels.find("name", 'woomycation-en').send(emb)
}catch(err){
	}

    })
    client.on("message", msg => {

      var prefix = "!";

      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);




   if (message.content.startsWith(`!sp2maide`)) {
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

  if (message.content.startsWith(`!contact ${message}`)) {
 try{
 let User = message.guild.member(message.mentions.users.first() || message.guild.members.get);
if(!User) return message.channel.send("Impossible de trouver l'utilisateur !");
var emb = new Discord.RichEmbed()

.setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)

.setColor("730000")
.setTitle("Quelqu'un vous as envoyez un message !:")
.setDescription(`Message de ${message.author.tag} : ${message} .`)
message.guild.member(User).send(emb);
 }catch(err) {
            message.channel.send("Une erreur c'est produite lors de l'envoie du message ou l'utilisateur n'est pas dans le ce serveur, veuilliez en parlez à Liquideur de kids si le problème persiste. Merci")
        }
}


   if (message.content.startsWith(`!sp2maide`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Titre des musiques")
        .setDescription(`!sp2m36 : Ink another day (Wet Floor) - [Match perdu]\n\n !sp2m37 : Turf Master (Wet Floor) - [Match gagner]\n\n !sp2m38 : Lobby \n\n !sp2m39 : Online Lobby (Ika Jamaica 2) \n\n !sp2m40 :Sheldon's Shop\n\n !sp2m41 : Flow's Shop\n\n !sp2m42 : Bisk's Shop\n\n !sp2m43 : Jelfonzo's Shop\n\n !sp2m44 : Beat of Inkopolis Square (with SFX)\n\n !sp2m45 : Seafom Shanty (Bottom Feeders) [Short Promo Ver.]  \n\n !sp2m46 : Shipwreckin' (Bottom Feeders) [Patch 2.0]\n\n !sp2m47 : Fins & Fiddles (Bottom Feeders) [Patch 2.0]\n\n !sp2m48 : Seafoam Shanty (Bottom Feeders) [Patch 2.0]\n\n!sp2m49 : Broken Coral (Ink Theory) [Patch 2.0] \n\n !sp2m50 :Riptide Rupture (Ink Theory) [Patch 2.0] \n\n !sp2m51 : Octo Expansion Trailer \n\n !sp2m52 : Chip Damage [Chirpy Chips - ABXY] \n\n !sp2m53 : Battery Full [Chirpy Chips - ABXY]`)
         message.author.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuilliez en parlez à Liquideur de kids . Merci")
        }}


   if (message.content.startsWith(`!sp2mhelp`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("The Title music")
        .setDescription(`!sp2m36 : Ink another day (Wet Floor) - [Match perdu]\n\n !sp2m37 : Turf Master (Wet Floor) - [Match gagner]\n\n !sp2m38 : Lobby \n\n !sp2m39 : Online Lobby (Ika Jamaica 2) \n\n !sp2m40 :Sheldon's Shop\n\n !sp2m41 : Flow's Shop\n\n !sp2m42 : Bisk's Shop\n\n !sp2m43 : Jelfonzo's Shop\n\n !sp2m44 : Beat of Inkopolis Square (with SFX)\n\n !sp2m45 : Seafom Shanty (Bottom Feeders) [Short Promo Ver.]  \n\n !sp2m46 : Shipwreckin' (Bottom Feeders) [Patch 2.0]\n\n !sp2m47 : Fins & Fiddles (Bottom Feeders) [Patch 2.0]\n\n !sp2m48 : Seafoam Shanty (Bottom Feeders) [Patch 2.0]\n\n!sp2m49 : Broken Coral (Ink Theory) [Patch 2.0] \n\n !sp2m50 :Riptide Rupture (Ink Theory) [Patch 2.0] \n\n !sp2m51 : Octo Expansion Trailer \n\n !sp2m52 : Chip Damage [Chirpy Chips - ABXY] \n\n !sp2m53 : Battery Full [Chirpy Chips - ABXY]`)
         message.author.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuilliez en parlez à Liquideur de kids . Merci")
        }}

 if(cmd == `!kick`){

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Impossible de trouver l'utilisateur !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour kick ! /n/n you have not parmission for kick !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas kick cette utilisateur ! /n/n You can not kick this user");

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
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour ban !/n/n you have not parmission for kick !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas ban cette utilisateur !/n/n You can not ban this user");

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
    message.guild.member(bUser).sendMessage(`Vous avez était kick du discord de ${servers} ! Pour :`, bReason);
    message.guild.member(bUser).ban(bReason);
    logchannel.send(banEmbed);


    return;
  }

 if(cmd == `!clear`){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour supprimer les message !/n/n You have not permission for remove send");
    if(!args[0]) return message.channel.send("Vous devez préciser combien de message je dois supprimer !/n/n You must specify how many messages I must delete! ");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Clear de ${args[0]} messages.`).then(msg => msg.delete(5000));
  })

  return;
  }



if(message.content.startsWith(prefix + 'aidesondage')){
  message.channel.sendMessage(" ",{
    embed: {

      color: 0xa1ceff,
      author:  message.author.name,

                title: 'Utilisation du Sondage',
                description: 'Vous devez faire : \n\n !sondage -[**TEXTE**] -[**CHOIX1**] -[**CHOIX2**] -[**CHOIX3**] -[**CHOIX4**] -[**CHOIX5**]-[**CHOIX6**]',
    }})}

if(message.content.startsWith(prefix + 'helpsondage')){
  message.channel.sendMessage(" ",{
    embed: {

      color: 0xa1ceff,
      author:  message.author.name,

                title: 'Using the Survey',
                description: 'You must do : \n\n !sondage_en -[**TEXTE**] -[**CHOIX1**] -[**CHOIX2**] -[**CHOIX3**] -[**CHOIX4**] -[**CHOIX5**]-[**CHOIX6**]',
    }})}


if(message.content.startsWith(prefix + 'sondage')){
  message.delete()
  let myrole = message.guild.member(bot.user).hasPermission("KICK_MEMBERS");
  let yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS");
  if(!myrole){
      return message.channel.send("*「vous n'avez pas la permissions pour faire cela」*");
  }
  if(!yourole){
      return message.channel.send("*「vous n'avez pas la permissions pour faire cela」*");
  }
  var sd1 = message.content.split("!1").slice(2)[0];
  var sd2 = message.content.split("!2").slice(3)[0];
  var sd3 = message.content.split("!3").slice(4)[0];
  var sd4 = message.content.split("!4").slice(5)[0];
  var sd5 = message.content.split("!5").slice(6)[0];
  var sd6 = message.content.split("!6").slice(7)[0];
  var sd7 = message.content.split("!7").slice(1)[0];
  if(sd1) sd1 = "<:one:> "+ sd1;
  if(sd2) sd2 = "<:two:> " +sd2;
  if(sd3) sd3 = "<:three:> " +sd3;
  if(sd4) sd4 = "<:four:> "+sd4;
  if(sd5) sd5 = "<:five:> "+sd5;
  if(sd6) sd6 = "<:six:> "+sd6;
  if(!sd1) sd1 = "";
  if(!sd2) sd2 = "";
  if(!sd3) sd3 = "";
  if(!sd4) sd4 = "";
  if(!sd5) sd5 = "";
  if(!sd6) sd6 = "";
  if(!sd7) sd7 = "";
        message.channel.sendMessage("**:scroll: SONDAGE :scroll: "+sd7+"\n"+sd1+"\n"+sd2+"\n"+sd3+"\n"+sd4+"\n"+sd5+"\n"+sd6+"\n[@everyone]**")
        .then(function (message) {
          if(sd1) sd1 = message.react(":one:");
          if(sd2) sd2 = message.react(":two:");
          if(sd3) sd3 = message.react(":three:");
          if(sd4) sd4 = message.react(":four:");
          if(sd5) sd5 = message.react(":five:");
          if(sd6) sd6 = message.react(":six:");
    			});
      }






   if (message.content.startsWith(`!eshopmh`)) {
     try {
        var emb = new Discord.RichEmbed()
            .setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Dates des musiques")
       .setDescription(` !eshopm1 : Juin 2011 (3DS) \n\n !eshopm2 : Novembre 2012 \n\n !eshopm3 : Septembre 2013 \n\n !eshop4 : Decembre 2013 \n\n !eshopm5 : Janvier 2014 \n\n !eshopm6 : Avril 2014 \n\n !eshopm7 : Juillet 2014 \n\n !eshopm8 : Janvier 2015 \n\n !eshopm9 : Juin 2015 \n\n !eshom10 : Septembre 2015 \n\n !eshopm11 : Decembre 2015 \n\n !eshopm12 : Janvier 2016  \n\n !eshopm13 : Mai 2016`)
        message.author.send(emb)
        } catch(err) {
            message.channel.send("Une erreur c'est produite , veuillez en parlez à Liquideur de kids . Merci")
        }}




   if (message.content.startsWith('!information')) {

    message.channel.send(`je suis dans ${bot.guilds.size} serveur`)

  }



if (message.content.startsWith(prefix + "commande")) {
var help_embed = new Discord.RichEmbed()
.setColor('#01FE7F')
.addField("Commande de Splatbotoon", "-!contact @mention (message) : envoyer un message à la personne que vous souhaiter \n\n-!clear(nombre de message a supprimer) : Pour ceux qui ont les permission __GéRER LES MESSAGE__ peuvent supprimer les message\n\n -!ban @mention (La raison du ban) : pour ceux qui sont __MODéRATEUR__ peuvent bannir les personnes \n\n -!kick @mention (La raison du kick) : pour ceux qui sont __MODéRATEUR__ peuvent expluser les gens \n\n-!sondage : Pour créez un sondage \n\n-!hsondage : pour s'avoir les commande du sondage \n\n\n -!tonserveur : tu veut splatbotoont sur ton serveur alors fait vite cette commande\n\n-!ping : la commande la plus connu pour rien\n\n -!monavatar pour voir son avatar en plus gros\n\n-!questionnaire : remplir le questionnaire de splatbotoont")
.addField("Commande musique de Splatbotoont", "-!eshopmh : toutes les dates des musique Nintendo Eshop \n\n -!eshopm(nombre de 1 à 13) : connecte toi sur le chat vocal ou il sera connecter et splatbotoont te chantera la musique choisis\n\n-!sp2m(nombre de 1 à 51) : connecte toi sur le chat vocal ou il sera connecter et splatbotoont te chantera la musique choisis\n\n-!sp2maide affiche toute les titre de musique.\n\n-!sp2mhelp affiche toute les titre de musique (liste en anglais).")
.addField("Logs", "Avant de voir les logs disponible de splatbotoont : \n créez un serveur nommée 'woomycation' \n dans les role selectionner que splatbotoont et mettre au moin envoyer des message, créez une invitation (pour prochainement hors grosse mise à jour)et gerer les message. après c'est tout\n passon au logs\n-1er : Je vous signale si il y a quelqu'un qui arrive sur votre serveur.\n-2ème : je vous signale si quelqu'un part de votre serveur.\n-3ème : je vous signale si quelqu'un à créez un nouveau émote (émoji).\n-4ème : je vous signale si quelqu'un a effacer un émote\n-5ème : je vous signale si quelqu'un à créez un role.\n-6ème : je vous signale si quelqu'un à supprimer un role")
.setFooter(`© Splatbotoont est tous droits réservés et Créé par Liquidateur de Kids.`, bot.user.avatarURL)
message.channel.sendMessage(`${message.author.tag} je vous envoie mes commande`)
message.author.send(help_embed)


 }

   if (message.content.startsWith('!tonserveur')) {
     var commande = [`merci ${message.author} de vouloir de moi sur ton serveur https://discordapp.com/oauth2/authorize?client_id=417229018132119562&scope=bot&permissions=2146958591`,`merci beaucoup ${message.author} de me vouloir https://discordapp.com/oauth2/authorize?client_id=417229018132119562&scope=bot&permissions=2146958591`];
   message.author.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
     message.author.send(`Pour s'avoir les commande faite !commande`)
}


   message.author.send(`Merci , par contre veuiller le remplir correctement https://goo.gl/forms/wh901u7Hnqzs6n603`)

}




if (message.content === "test") {

var commande = ["Regarde, c'est du random","C'est magique t'as vu ?","Wouah","Sa faisait longtemps que je chercher cette commande"];

 message.channel.sendMessage(`${(commande[Math.floor(Math.random() * commande.length)])}`)

}

})


});
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
  if (message.content.startsWith('!sp2m52')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 52.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!sp2m53')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./musique 53.mp3')
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
bot.on('message', message => {
  if (message.content.startsWith('!octo1')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo1.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo1')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo1.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo2')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo2.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo3')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo3.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo4')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo4.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo5')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo5.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo6')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo6.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo7')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo7.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo8')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo8.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo9')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo9.wav')

        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo10')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo10.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo11')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo11.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo12')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo12.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo13')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo13.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo14')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo14.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo15')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo15.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo16')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo16.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo17')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo17.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo18')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo18.wav')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo19')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo19.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo20')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo20.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo21')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo21.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo22')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo22.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo23')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo23.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo24')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo24.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo25')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo25.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo26')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo26.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo27')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo27.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo28')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo28.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo29')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo29.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo30')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo30.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo31')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo31.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo32')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo32.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo33')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo33.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo34')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo34.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo35')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo35.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo36')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo36.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo37')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo37.mp3')
        })}})
bot.on('message', message => {
  if (message.content.startsWith('!octo38')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
    voiceChannel.join()
      .then(connection => {
 connection.playFile('./octo38.mp3')
        })}})

bot.login(process.env.TOKEN)
