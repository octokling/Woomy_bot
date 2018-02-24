const Command = require('./command');
const search = require('youtube-search');

module.exports = class Youtube extends Command {

    static match (message) {
        return message.content.startsWith('!youtube') || message.content.startsWith('!yt')
    }

    static action (message) {
        let args = message.content.split(' ');
        args.shift();

        const opts = {
            maxResults: 1,
            key: process.env.YT_TOKEN
        };

        search(args.join('%20'), opts, function(err, results) {
            message.delete();
            message.channel.send("Une erreur c'est produite veuillier en parler au propriètaire de splatbotoon (liquideur de kids)");
        });
    }

};
