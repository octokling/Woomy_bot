var Discord = require('discord.js');
const Command = require('./command')

module.exports = class Youtube extends Command {

	static match(message) {
		return message.content.startsWith('d?youtube')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.reply('https://www.youtube.com/watch?v=' + args.join('+'))
	}
}
