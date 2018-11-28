const streamOptions = { seek: 0, volume: 1 };
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
let link = message.content.split("https://www.youtube.com/watch?v=").slice(1);
let link1 = link.join(" ")
if(!link1) return message.reply("Merci de bien mettre un lien youtube !");
    console.log('Vous avez une demander un musique!' + link);
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Soyez dans un channel je vous rejoint ;)');
    }
  voiceChannel.join().then(connection => { 
  	
var stream = connection.playStream(ytdl (`https://www.youtube.com/watch?v=${link}`, { audioonly : true}), {passes : 1});
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
}
