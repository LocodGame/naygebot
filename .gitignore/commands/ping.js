const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
    message.channel.send("``` Ma latence est de : " + Math.round(bot.ping) +" ms !```")

}

module.exports.help = {

  name: "ping"

}