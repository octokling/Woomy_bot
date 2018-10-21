var Discord = require('discord.js');
const Command = require('./command')

module.exports = class Wiki extends Command {

	static match(message) {
		return message.content.startsWith('!wiki')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.reply('`Voici le résultat de votre recherche` :arrow_heading_down:\nhttps://fr.wikipedia.org/wiki/' + args.join('_'))
	}
}
