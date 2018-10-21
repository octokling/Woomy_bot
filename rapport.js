const Discord = require("discord.js");
const Command = require('./command')
const dateFormat = require('dateformat');
module.exports = class Blague extends Command {

    static match(message) {
		return message.content.startsWith('!rapport')
	}

}
dateFormat(now, 'shortDate');

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Utilisateur reporté :", `${rUser} with ID: ${rUser.id}`)
    .addField("Reporté par : ", `${message.author} with ID: ${message.author.id}`)
    .addField("Cela c'est passe au channel : ", message.channel)
    .addField("Le : ", dateFormat(rUser.user.createdAt, 'dd/mm/yyyy') + " à " + dateFormat(rUser.user.createdAt, 'H:MM'))
    .addField("La raison : ", rreason);

    let reportschannel = message.guild.channels.find(`name`, "woomycation");
    if(!reportschannel) return message.channel.send("J'ai n'est pas trouver le channel 'woomycation'");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
