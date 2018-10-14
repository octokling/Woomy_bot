const Discord = require("discord.js")
let coins = require("./coins.json")
module.exports.run = async (bot, message, args) => {
//!coins
if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}

let uCoins = uCoins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setcolor("#0000FF")
  .addField("Pièce", `:moneybag:Vous avez : ${uCoins} pièces d'ajoutées:moneybag:`);
message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}


module.exports.help = {
	name: "coins"
}