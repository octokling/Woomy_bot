const Command = require('./command');
const YoutubeStream = require('ytdl-core');
const search = require('youtube-search');

module.exports = class Play
    extends Command {

    static match (message) {
        return message.content.startsWith('!play')
    }

    static action (message) {
        let voiceChannel = message.guild.channels
            .filter(function (channel) { return channel.type === 'voice' })
            .first();
        let args = message.content.split(' ');
        if (args.length > 1) {

            args.shift();

            const opts = {
                maxResults: 1,
                key: process.env.YT_TOKEN
            };

            search(args.join('%20'), opts, function(err, results) {
                if(err) return console.log(err);

                voiceChannel
                    .join()
                    .then(function (connection) {
                        let stream = YoutubeStream(results[0].link);
                        stream.on('error', function () {
                            message.reply('ERROR')
                        });
                        message.delete();
                        message.reply('play : ' + results[0].link);
                        connection.playStream(stream).on('end', function () {
                            connection.disconnect();
                        });
                    })
            });
        }
    }

};
