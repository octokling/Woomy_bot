const Command = require('./command')
const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = class Google extends Command {
static match(message) {
	if(message.content[0] === prefix)
}
static action(message) {
		let splitMessage = message.content.split(" "); // split le message en deux [!pfc] & [contenu]
		if(splitMessage[0] === '!pfc') {
			if(splitMessage.length === 2) {
				// message.channel.send('Command + ' + splitMessage[1]);
				var userChoice = splitMessage[1]; // Autre partie du message (sans !pfc)
				var botChoice = Math.floor(Math.random() * 3); // Nombre choisi aléatoirement [0; 1; 2]
				// Smileys
				var stone = ":white_circle:"; // Pierre
				var leaf = ":maple_leaf:"; // Feuille
				var scissors = ":scissors:"; // Ciseaux
				// console.log(botChoice); // Debug (choix du bot en console)
				switch ( botChoice ) {
					case 0:
					var botChoice = "Pierre"
					break;
					case 1:
					var botChoice = "Feuille"
					break;
					case 2:
					var botChoice = "Ciseaux"
					break;
					default:
					message.channel.send(":warning:")
				}
				switch ( userChoice ) {
					case "Pierre":
					case "pierre":
					if (botChoice === "Pierre") {
						message.reply("Égalité ! J'avais aussi choisi la pierre ! " + stone);
						message.react("🔁");
					} else if (botChoice === "Feuille") {
						message.reply("Perdu ! J'avais choisi la feuille ! " + leaf);
						message.react("👎");
					} else if (botChoice === "Ciseaux") {
						message.reply("Gagné ! J'avais choisi les ciseaux ! " + scissors);
						message.react("🎉");
					}
					break;
					case "Feuille":
					case "feuille":
					if (botChoice === "Pierre") {
						message.reply("Gagné ! J'avais choisi la pierre... " + stone);
						message.react("🎉");
					} else if (botChoice === "Feuille") {
						message.reply("Égalité ! J'avais aussi choisi la feuille ! " + leaf);
						message.react("🔁");
					} else if (botChoice === "Ciseaux") {
						message.reply("Perdu ! J'avais choisi les ciseaux ! " + scissors);
						message.react("👎");
					}
					break;
					case "Ciseaux":
					case "ciseaux":
					if (botChoice === "Pierre") {
						message.reply("Perdu ! J'avais choisi la pierre ! " + stone);
						message.react("👎");

					} else if (botChoice === "Feuille") {
						message.reply("Gagné ! J'avais choisi la feuille... " +leaf)
						message.react("🎉");
						
					} else if (botChoice === "Ciseaux") {
						message.reply("Égalité ! J'avais aussi choisi les ciseaux ! " + scissors)
						message.react("🔁");
					}
					break;
					default:
					message.channel.send(":warning: Vous devez entrer votre choix ! :warning: \n **Pierre** " +stone+ " ; **Feuille** " +leaf+ " ou **Ciseaux** " +scissors+ " !")
					message.reply()
				}
			}
		}
	}
)
}}
