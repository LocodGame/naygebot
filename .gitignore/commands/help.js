const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    var helpembed = new Discord.RichEmbed()
    .setTitle("Aide")
    .setDescription("Pour avoir une aide plus précise d'un commande faite `n!help <commande>` !")
    .addField("Administration **[1]**", "`say`")
    .addField("Modération **[1]**","`infos`", true)
    .addField("Utils **[3]**", "`text`, `clear`, `color`")
    .addField("Staff **[3]**", "`mute`, `unmute`, `ping`")
    .addField("Général **[1]**", "`report`")
    .setColor("fb980a")
    .setFooter("NaygeBot")



    message.channel.sendEmbed(helpembed);

}

module.exports.help = {

  name: "help"

}