const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let args1 = message.content.trim().split(/ +/g) 
    let argu1 = args1[1]
    let argu2 = args1[2]
    if(!argu1) return message.reply("merci de mettre la mention du joueur !");
    if(!argu2) return message.reply("merci de mettre une raison !");
    if(!rUser) return message.channel.send(argu1 + " est introuvable ! Merci de mettre son pseudo en mention !");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Utilisateur report :", `${rUser} avec ID: ${rUser.id}`)
    .addField("Report par :", `${message.author} avec ID: ${message.author.id}`)
    .addField("Channel :", message.channel)
    .addField("Jours :", message.createdAt)
    .addField("Raison :", rreason);

   let reportschannel = message.guild.channels.find(`name`, "『🔖』reports");
    if(!reportschannel) return message.channel.send("Channel report non trouvé !");

    message.delete().catch(O_o=>{});

    reportschannel.send(reportEmbed);


    message.reply("votre report a bien été envoyé !");

}

 

module.exports.help = {

  name: "report"

}