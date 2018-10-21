var Discord = require('discord.js');
const Command = require('./command')

module.exports = class Youtube extends Command {

	static match(message) {
		return message.content.startsWith('!youtube')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.reply('`Voici le résultat de votre recherche` :arrow_heading_down:\nhttps://www.youtube.com/results?search_query=' + args.join('+'))
	}
}
