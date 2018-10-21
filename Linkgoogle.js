const Command = require('./command')

module.exports = class Google extends Command {

	static match(message) {
		return message.content.startsWith('!google')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.reply('`Voici le résultat de votre recherche` :arrow_heading_down:\nhttps://www.google.fr/#q=' + args.join('+'))
	}
}
