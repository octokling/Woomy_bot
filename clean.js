const fs = module.require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas le grade : __Gérer les Message__.");
    
    if(!isNaN(args[0]) && args[0] < 100){
		
		let nombre = parseInt(args[0]) + 1;
		
		message.channel.bulkDelete(nombre).then(messages => message.reply(`à supprimé ${messages.size -1} messages`).then(msg => msg.delete(10000))).catch(console.error);
		
	}else{
		
		message.delete();
		message.reply("vous n'avez pas défini le nombre (inférieur à 100) de message.");
		
	}
}

module.exports.help = {
    name: "clean"
}
