const Discord = require("discord.js");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter)

module.exports.run = async (bot, message, args) => {

  let args1 = message.content.trim().split(/ +/g) 
  let argu1 = args1[1]

  if(!argu1) return message.reply("merci de mettre ce que vous voulez etre informer ! Pour plus d'information taper `n!help infos` !");

  if(argu1 == "bot") {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Information du bot !")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot :", bot.user.username)
    .addField("Créateur :", "LocodGame")
    .addField("Date de création :", bot.user.createdAt);
    
    message.channel.send(botembed);
  }
  if(argu1 == "joueur") {

    let argu2 = args1[2]
    if(!argu2) return message.reply("merci de mettre le pseudo du joueur en mention ! Pour plus d'information taper `n!help infos` !");
    let pers = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!pers) return message.channel.send(argu2 + " est introuvable ! Merci de mettre son pseudo en mention !");
    let biconj = pers.user.displayAvatarURL;

    let msgauthor = pers.id;


    var count_message = db.get("count_message").filter({user: msgauthor}).find('count_message').value()
    if(!count_message) {
      let botembed = new Discord.RichEmbed()
    .setDescription("Information sur " + pers + " !")
    .setColor("#15f153")
    .setThumbnail(biconj)
    .addField("Pseudo :", pers.user.username)
    .addField("ID du joueur :", pers.id)
    .addField('Nombre de message envoyer depuis que le bot est sur ce serveur : ', '0')
    .addField("Date de création  du compte :", pers.user.createdAt)
    .setFooter('NaygeBot');
  
    message.channel.send(botembed);
      return;
    }

    var msgfinal = Object.values(count_message);

    let botembed = new Discord.RichEmbed()
    .setDescription("Information sur " + pers + " !")
    .setColor("#15f153")
    .setThumbnail(biconj)
    .addField("Pseudo :", pers.user.username)
    .addField("ID du joueur :", pers.id)
    .addField('Nombre de message envoyer depuis que le bot est sur ce serveur : ', msgfinal[1])
    .addField("Date de création  du compte :", pers.user.createdAt)
    .setFooter('NaygeBot');

    message.channel.send(botembed);
  }

  if(argu1 == "channel") {

  }
}


module.exports.help = {

  name:"infos"

}