const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var request = require('request');
prefix = "!"

exports.run = (message, args, prefix, suffix, client, permissions) => {
   

    let data;
    request('http://splatoon.ink/schedule2.json', function (error, res, body) {
        try {
            data = JSON.parse(body);
        }
        catch (e) {
            return message.reply("Oups, quelque chose a mal tourné pas de mon côté! Veuillez réessayer plus tard. Si le problème persiste, connectez-vous au serveur de support dans le menu d'aide. \ NCode d'erreur: `SAPI-PFAIL-01");
        }

        let endTime = data.modes.regular[0].endTime;
        let tMaps = data.modes.regular[0].maps;
        let lMaps = data.modes.league[0].maps;
        let rMaps = data.modes.gachi[0].maps;

        let lMode = data.modes.league[0].rule.name;
        let rMode = data.modes.gachi[0].rule.name;

        /*let now = new Date();
        let dif = Math.abs(endTime - now) / 1000;
        let days = Math.floor(dif / 86400);
        dif -= days * 86400;
        let hours = Math.floor(dif / 3600) % 24;
        dif -= hours * 3600;
        let mins = Math.floor(dif / 60) % 60;
        dif -= mins * 60;
        let seconds = Math.floor(dif % 60);*/

        let timeUntil = function(endTime) {
            let dateFuture = endTime;
            let dateNow = Date.now();

            let seconds = Math.floor(((dateFuture * 1000) - dateNow) / 1000);
            let minutes = Math.floor(seconds/60);
            let hours = Math.floor(minutes/60);
            let days = Math.floor(hours/24);

            hours = hours-(days*24);
            minutes = minutes-(days*24*60)-(hours*60);
            seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

            return [hours, minutes, seconds];
        };

	
        if (args[0]) {
            let endTime2 = data.modes.regular[1].startTime;
            let tMaps2 = data.modes.regular[1].maps;
            let lMaps2 = data.modes.league[1].maps;
            let rMaps2 = data.modes.gachi[1].maps;

            let lMode2 = data.modes.league[1].rule.name;
            let rMode2 = data.modes.gachi[1].rule.name;

            let endTime3 = data.modes.regular[2].startTime;
            let tMaps3 = data.modes.regular[2].maps;
            let lMaps3 = data.modes.league[2].maps;
            let rMaps3 = data.modes.gachi[2].maps;

            let lMode3 = data.modes.league[2].rule.name;
            let rMode3 = data.modes.gachi[2].rule.name;



                if (args[0].toLowerCase() === "turf" || args[0].toLowerCase() === "turfwar" || args[0].toLowerCase() === "turf war" || args[0].toLowerCase() === "classique") {
            message.channel.send({embed:{
                    title: "Rotation de la guerre de territoire",
                    color: 13497646,
                    fields: [
                        {
                            name: "En ce moment : ",
                            value: tMaps.join(' et ')
                        },
                        {
                            name: `Dans ${timeUntil(endTime2)[0]} heures, ${timeUntil(endTime2)[1]} minutes, ${timeUntil(endTime2)[2]} secondes.`,
                            value: tMaps2.join(' et ')
                        },
                        {
                            name: `Dans ${timeUntil(endTime3)[0]} heures, ${timeUntil(endTime3)[1]} minutes, ${timeUntil(endTime3)[2]} secondes.`,
                            value: tMaps3.join(' et ')
                        }
                    ]
                }});
            }
            else if (args[0].toLowerCase() === "ranked") {
                message.channel.send({embed:{
                    title: "Rotation du match pro",
                    color: 16009234,
                    fields: [
                        {
                            name: "En ce moment : ",
                            value: `${rMode} Avec pour terrain ${rMaps.join(' et ')}`
                        },
                        {
                            name: `Dans ${timeUntil(endTime2)[0]} heures, ${timeUntil(endTime2)[1]} minutes, ${timeUntil(endTime2)[2]} secondes.`,
                            value: `${rMode2} Avec pour terrain ${rMaps2.join(' et ')}`
                        },
                        {
                            name: `Dans ${timeUntil(endTime3)[0]} heures, ${timeUntil(endTime3)[1]} minutes, ${timeUntil(endTime3)[2]} secondes.`,
                            value: ` ${rMode3} Avec pour terrain ${rMaps3.join(' et ')}`
                        }
                    ]
                }});
            }

            else if (args[0].toLowerCase() === "league") {
                message.channel.send({embed:{
                    title: "Match en ligue Rotation",
                    color: 16724889,
                    fields: [
                        {
                            name: "En ce moment : ",
                            value: `Mode : ${lMode} Avec pour terrain ${lMaps.join(' and ')}`
                        },
                        {
                            name: `Dans ${timeUntil(endTime2)[0]} heures, ${timeUntil(endTime2)[1]} minutes, ${timeUntil(endTime2)[2]} secondes.`,
                            value: `Mode : ${lMode2} Avec pour terrain ${lMaps2.join(' et ')}`
                        },
                        {
                            name: `Dans ${timeUntil(endTime3)[0]} heures, ${timeUntil(endTime3)[1]} minutes, ${timeUntil(endTime3)[2]} secondes.`,
                            value: `Mode : ${lMode3} Avec pour terrain ${lMaps3.join(' et ')}`
                        }
                    ]
                }});
            }
            else return message.reply('vous devez entrer soit turf war, ranked, ou league!');
        }

        else {
            message.channel.send({
                embed: {
                    title: "Rotation actuelle",
                    fields: [
                        {
                            name: "Match classique",
                            value: tMaps.join(' et ')
                        },
                        {
                            name: "Match pro",
                            value: rMode + ' Avec pour maps : ' + rMaps.join(' et ')
                        },
                        {
                            name: "Match en league",
                            value: lMode + ' Avec pour maps ' + lMaps.join(' et ')
                        }
                    ],
                    footer: {
                        text: `Les stages changent dans : ${timeUntil(endTime)[0]} hours, ${timeUntil(endTime)[1]} minutes, ${timeUntil(endTime)[2]} seconds.`
                    }
                }
            });
        }
    });
};
