bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
	
if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je n'est pas trouver l'utilisateur !");
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
    if(!kickChannel) return message.channel.send("Je ne trouve pas le chat 'woomycation'");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je n'est pas trouver l'utilisateur !");
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
    if(!incidentchannel) return message.channel.send("Je ne trouve pas le chat 'woomycation'");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
}})
