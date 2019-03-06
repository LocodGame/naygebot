const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
  if(!args[0]) return message.channel.send("Merci d'indiquer le nombre de message à supprimer !");
  let args1 = message.content.trim().split(/ +/g)
  let count = args1 [1]
  if(count < 1 || count > 100) return message.channel.send("Merci d'indiquer un nombre entre 1 et 100 !")  

  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Suppression de ${args[0]} messages en cours ...`).then(msg => msg.delete(2000));

});
}

module.exports.help = {

  name: "clear"

}